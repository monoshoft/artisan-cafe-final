import React, { useState } from 'react';
import { X, Send, CheckCircle2, Copy, AlertCircle, Sparkles } from 'lucide-react';
import { ConceptId } from '../../types/cafe';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConceptId?: ConceptId | 'custom';
}

const DESIGN_OPTIONS: { id: ConceptId | 'custom'; name: string; tag: string }[] = [
  { id: 'brewhaven', name: 'Brew Haven Style', tag: 'Dark Luxury Espresso' },
  { id: 'harth', name: 'Harth Coffee Style', tag: 'Architectural Editorial' },
  { id: 'bean', name: 'Bean & Bloom Style', tag: 'Botanical Bakery' },
  { id: 'coffeee', name: 'Coffeeë Style', tag: 'Haute Pâtisserie' },
  { id: 'bodren', name: 'BODREN Style', tag: 'Interactive 3D WebGL' },
  { id: 'custom', name: 'Custom Architecture', tag: 'Bespoke Brand Direction' },
];

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialConceptId = 'harth',
}) => {
  const [selectedConcept, setSelectedConcept] = useState<ConceptId | 'custom'>(initialConceptId);
  const [clientName, setClientName] = useState('');
  const [cafeName, setCafeName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeline, setTimeline] = useState('2–4 Weeks');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const agencyEmail = import.meta.env.VITE_AGENCY_EMAIL || '';
  const agencyWhatsApp = import.meta.env.VITE_AGENCY_WHATSAPP || '';
  const isDestinationConfigured = Boolean(agencyEmail || agencyWhatsApp);

  const selectedDesign = DESIGN_OPTIONS.find((d) => d.id === selectedConcept) || DESIGN_OPTIONS[0];

  const enquiryText = `Hello OBVERRA DIGITAL Team,

I would like to discuss a custom website for my physical café:
• Café Name: ${cafeName || 'My Artisan Café'}
• Location / City: ${location || 'Not specified'}
• Contact Person: ${clientName || 'Not specified'}
• Email: ${email || 'Not specified'}
• Phone / WhatsApp: ${phone || 'Not specified'}
• Preferred Design Style: ${selectedDesign.name} (${selectedDesign.tag})
• Target Launch Timeline: ${timeline}
• Project Scope & Notes: ${message || 'Looking for an bespoke offline café website with menu showcase, locations, and ambience photography.'}

Looking forward to your custom quote and design consultation.`;

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(enquiryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (agencyEmail) {
      const mailtoUrl = `mailto:${agencyEmail}?subject=${encodeURIComponent(
        `Project Enquiry: ${cafeName || 'Café'} - ${selectedDesign.name}`
      )}&body=${encodeURIComponent(enquiryText)}`;
      window.location.href = mailtoUrl;
    } else if (agencyWhatsApp) {
      const waUrl = `https://wa.me/${agencyWhatsApp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(enquiryText)}`;
      window.open(waUrl, '_blank');
    }

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-[#090D14] border border-cyan-500/30 text-stone-100 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.15)] z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-white">
              Project Brief Prepared!
            </h3>
            <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
              Your custom consultation brief for <strong>{selectedDesign.name}</strong> has been created. The OBVERRA DIGITAL creative team will review your café requirements and prepare a custom proposal.
            </p>
            <div className="pt-2">
              <button
                onClick={handleCopyBrief}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Project Brief'}</span>
              </button>
            </div>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold text-xs uppercase tracking-wider transition-all"
              >
                Return to Showcase
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  OBVERRA DIGITAL • BESPOKE INQUIRY
                </span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white">
                Request a Custom Quote
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Tell us about your physical café, roastery, or bakery. We tailor every project quote specifically to your branding, menu scope, and interaction needs.
              </p>
            </div>

            {/* Design Direction Selector */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block font-semibold">
                Select Design Style of Interest
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {DESIGN_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedConcept(opt.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      selectedConcept === opt.id
                        ? 'border-cyan-400 bg-cyan-950/40 text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                        : 'border-stone-800 bg-[#0C111A] text-stone-400 hover:border-stone-700 hover:text-stone-200'
                    }`}
                  >
                    <div className="font-semibold text-xs leading-tight">{opt.name}</div>
                    <div className="text-cyan-400 text-[10px] font-mono mt-0.5">
                      {opt.tag}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div>
                <label className="block text-stone-300 font-medium mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rachel Adams"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-800 text-white placeholder:text-stone-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">Café / Roastery Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Haven Specialty Coffee"
                  value={cafeName}
                  onChange={(e) => setCafeName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-800 text-white placeholder:text-stone-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="owner@yourcafe.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-800 text-white placeholder:text-stone-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+91 98765 00000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-800 text-white placeholder:text-stone-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">Physical City / Neighborhood</label>
                <input
                  type="text"
                  placeholder="e.g. Indiranagar, Bangalore"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-800 text-white placeholder:text-stone-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">Target Launch Timeline</label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-800 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option>Immediate (1–2 Weeks)</option>
                  <option>2–4 Weeks</option>
                  <option>1–2 Months</option>
                  <option>Exploring / New Café Opening</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-stone-300 text-xs font-medium mb-1">
                Project Scope & Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Mention number of locations, menu size, table reservation requirements, custom 3D needs, or specific design preferences..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-800 text-white placeholder:text-stone-600 focus:outline-none focus:border-cyan-400 text-xs"
              />
            </div>

            {/* Destination Configuration Status */}
            {!isDestinationConfigured && (
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-200 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-semibold text-white">Configurable Contact Destination</div>
                  <div className="text-[11px] text-stone-400">
                    Set <code className="text-cyan-300 bg-black/40 px-1 py-0.5 rounded">VITE_AGENCY_EMAIL</code> or <code className="text-cyan-300 bg-black/40 px-1 py-0.5 rounded">VITE_AGENCY_WHATSAPP</code> in your environment. You can copy the generated project brief directly below.
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleCopyBrief}
                className="w-full sm:w-auto px-4 py-3 rounded-xl border border-stone-700 hover:border-cyan-500/50 text-stone-300 hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Brief Copied!' : 'Copy Brief to Clipboard'}</span>
              </button>

              <button
                type="submit"
                className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Custom Quote Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
