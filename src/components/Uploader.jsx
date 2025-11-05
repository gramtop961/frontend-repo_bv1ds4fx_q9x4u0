import { useCallback, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, Image as ImageIcon, FileText, CheckCircle2 } from 'lucide-react';

export default function Uploader() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    handleFile(f);
  }, []);

  const onSelect = useCallback((e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    handleFile(f);
  }, []);

  const handleFile = (f) => {
    setFile(f);
    setReady(false);
    setProgress(0);
    const url = URL.createObjectURL(f);
    setPreviewUrl(url);
  };

  const fileTypeIcon = useMemo(() => {
    if (!file) return null;
    if (file.type.includes('image')) return <ImageIcon className="h-4 w-4" />;
    return <FileText className="h-4 w-4" />;
  }, [file]);

  const simulateProcess = async () => {
    setProcessing(true);
    setReady(false);
    for (let i = 0; i <= 100; i += 5) {
      await new Promise((r) => setTimeout(r, 80));
      setProgress(i);
    }
    setProcessing(false);
    setReady(true);
  };

  return (
    <section id="demo" className="relative bg-[#05070B] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            className="text-center text-3xl sm:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Try the converter
          </motion.h2>
          <p className="mt-3 text-center text-white/70">
            Drop a floor plan (PNG, JPG, PDF) to generate an interactive 3D model preview.
          </p>

          <div
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
            className="mt-8 rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-6 sm:p-8"
          >
            <div className="flex flex-col items-center text-center">
              <div className="grid place-items-center h-12 w-12 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                <UploadCloud className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Upload floor plan</h3>
              <p className="mt-1 text-sm text-white/70">Drag & drop or click to select a file</p>
              <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10">
                <input type="file" className="hidden" accept="image/*,.pdf" onChange={onSelect} />
                <UploadCloud className="h-4 w-4" /> Choose file
              </label>

              <AnimatePresence>
                {file && (
                  <motion.div
                    className="mt-6 w-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-3">
                      <div className="flex items-center gap-2 text-white/80">
                        <div className="text-cyan-300">{fileTypeIcon}</div>
                        <span className="truncate max-w-[60%]">{file.name}</span>
                      </div>
                      {!ready ? (
                        <button
                          onClick={simulateProcess}
                          className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white"
                          disabled={processing}
                        >
                          {processing ? 'Converting…' : 'Convert to 3D'}
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 text-emerald-400">
                          <CheckCircle2 className="h-4 w-4" /> Ready
                        </div>
                      )}
                    </div>

                    {(processing || progress > 0) && !ready && (
                      <div className="mt-3">
                        <div className="h-2 w-full overflow-hidden rounded bg-white/10">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <div className="mt-2 text-right text-xs text-white/60">{progress}%</div>
                      </div>
                    )}

                    {ready && (
                      <motion.div
                        className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-semibold">Interactive Preview</h4>
                          <div className="text-xs text-white/60">Orbit • Pan • Zoom</div>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/5">
                            {/* Show uploaded plan preview */}
                            {previewUrl && (
                              <img src={previewUrl} alt="Uploaded plan" className="h-full w-full object-contain" />
                            )}
                          </div>
                          <div className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/5 grid place-items-center text-white/70">
                            <div className="p-4 text-center">
                              <div className="text-sm">A 3D model would render here after processing.</div>
                              <div className="mt-2 text-xs">For this demo, we simulate the workflow without uploading data.</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
