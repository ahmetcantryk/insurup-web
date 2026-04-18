"use client";

import { useState } from "react";
import { sendEmail } from "@/utils/email";
import { gtagSendEvent } from "@/utils/gtag";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      agency: String(fd.get("agency") || ""),
      name: String(fd.get("name") || ""),
      role: String(fd.get("role") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      package: String(fd.get("package") || ""),
      source: "insurup-web · landing",
    };

    setStatus("sending");
    const res = await sendEmail("CONTACT_FORM", payload);
    setStatus(res.success ? "success" : "error");
    setMessage(res.message);
    if (res.success) {
      gtagSendEvent();
      form.reset();
    }
  }

  return (
    <section id="iletisim" className="relative py-28" style={{ background: "#FAFAF9" }}>
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-14">
        <div className="reveal">
          <div className="eyebrow text-ink-900/50 mb-4">DEMO TALEP</div>
          <h2 className="display text-[48px] md:text-[56px] text-ink-900 leading-[1]">Acenteni tanıyalım.</h2>
          <p className="mt-5 text-ink-900/60 text-[16px] leading-[1.6] max-w-[520px]">Formu doldur, satış ekibimiz 24 saat içinde dönsün. Demo + özel fiyat teklifini tek görüşmede sunuyoruz.</p>

          <form className="mt-10 grid md:grid-cols-2 gap-4" onSubmit={onSubmit} noValidate>
            <div className="field md:col-span-2"><input name="agency" type="text" placeholder=" " required /><label>Acente İsmi</label></div>
            <div className="field"><input name="name" type="text" placeholder=" " required /><label>Ad Soyad</label></div>
            <div className="field">
              <select name="role" required defaultValue="">
                <option value="" disabled></option>
                <option>Acente Sahibi</option>
                <option>Yönetici</option>
                <option>Satış Temsilcisi</option>
                <option>BT / Operasyon</option>
              </select>
              <label>Rol</label>
            </div>
            <div className="field"><input name="phone" type="tel" placeholder=" " required /><label>Telefon</label></div>
            <div className="field"><input name="email" type="email" placeholder=" " required /><label>E-posta</label></div>
            <div className="field md:col-span-2">
              <select name="package" defaultValue="">
                <option value="" disabled></option>
                <option>Profesyonel</option>
                <option>Dijital Profesyonel</option>
                <option>InsurChat Akıllı Teklif</option>
                <option>Henüz emin değilim · Danışmanlık istiyorum</option>
              </select>
              <label>İlgilendiğin Paket</label>
            </div>
            <div className="md:col-span-2 flex items-center justify-between pt-2 gap-4 flex-wrap">
              <label className="flex items-center gap-2 text-[12px] text-ink-900/55">
                <input type="checkbox" required className="w-4 h-4 accent-[#4C6EF5]" />
                <span>KVKK aydınlatma metnini okudum, onaylıyorum.</span>
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-6 py-3 rounded-lg font-medium btn-primary inline-flex items-center gap-2 disabled:opacity-60"
              >
                {status === "sending" ? "Gönderiliyor..." : "Demo Talep Et"}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            {status === "success" && (
              <div className="md:col-span-2 p-3 rounded-lg text-[13px]" style={{ background: "rgba(79,209,197,.12)", color: "#0F8E7F", border: "1px solid rgba(79,209,197,.35)" }}>
                ✓ {message}
              </div>
            )}
            {status === "error" && (
              <div className="md:col-span-2 p-3 rounded-lg text-[13px]" style={{ background: "rgba(255,95,87,.1)", color: "#CC3A32", border: "1px solid rgba(255,95,87,.3)" }}>
                ✗ {message}
              </div>
            )}
          </form>
        </div>

        <div className="reveal">
          <div className="card-light p-7 h-full" style={{ background: "linear-gradient(180deg,#fff,#F2F1EE)" }}>
            <div className="eyebrow text-ink-900/50 mb-5">NEDEN INSURUP?</div>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(76,110,245,.12)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4C6EF5" strokeWidth="1.8"><path d="M3 17 L9 11 L13 15 L21 7"/></svg>
                </div>
                <div>
                  <div className="font-medium text-[15px]">3x daha hızlı büyüme</div>
                  <div className="text-ink-900/55 text-[13.5px]">Ortalama acente cirosu 12 ayda 3 kat arttı.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(155,107,240,.14)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9B6BF0" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 12 L11 15 L16 9"/></svg>
                </div>
                <div>
                  <div className="font-medium text-[15px]">30+ şirket entegrasyonu</div>
                  <div className="text-ink-900/55 text-[13.5px]">Türkiye&apos;nin en büyük sigorta API ağına tek tıkla bağlan.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(79,209,197,.16)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F8E7F" strokeWidth="1.8"><path d="M12 2 L4 6 V12 C4 17 7.5 21 12 22 C16.5 21 20 17 20 12 V6 Z"/></svg>
                </div>
                <div>
                  <div className="font-medium text-[15px]">KVKK + ISO 27001</div>
                  <div className="text-ink-900/55 text-[13.5px]">Türkiye&apos;de veri merkezi · şifreli ve güvenli altyapı.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(10,15,44,.08)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0F2C" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6 V12 L16 14"/></svg>
                </div>
                <div>
                  <div className="font-medium text-[15px]">7/24 destek</div>
                  <div className="text-ink-900/55 text-[13.5px]">Kritik anda yanındayız. Ortalama 11 dk ilk yanıt.</div>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t space-y-3 text-[13px] font-mono text-ink-900/60" style={{ borderColor: "rgba(10,15,44,.08)" }}>
              <div className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-ink-900/40"></span> destek@insurup.co</div>
              <div className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-ink-900/40"></span> +90 850 · 000 00 00</div>
              <div className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-ink-900/40"></span> Levent · İstanbul · Türkiye</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
