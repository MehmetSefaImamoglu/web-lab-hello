import { useState, type FormEvent } from "react";

// --- Form veri modeli ---
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// --- Hata modeli (tüm alanlar opsiyonel — yalnızca hata varsa dolu) ---
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// --- Başlangıç değerleri — formu sıfırlarken de kullanılır ---
const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// --- Doğrulama mantığı — component dışında tanımla, test edilmesi kolay ---
function validate(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Ad soyad zorunludur.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Ad soyad en az 2 karakter olmalıdır.";
  }

  if (!data.email.trim()) {
    errors.email = "E-posta zorunludur.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Geçerli bir e-posta adresi giriniz.";
  }

  if (!data.subject) {
    errors.subject = "Konu seçimi zorunludur.";
  }

  if (!data.message.trim()) {
    errors.message = "Mesaj zorunludur.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Mesaj en az 10 karakter olmalıdır.";
  }

  return errors;
}

// Ortak input sınıfları — hata durumuna göre kenarlık rengi değişir
function fieldClass(hasError: boolean): string {
  return [
    "w-full border rounded-lg px-3 py-2.5 text-sm bg-white dark:bg-gray-800",
    "text-gray-900 dark:text-white placeholder-gray-400",
    "focus:outline-none focus:ring-2 focus:border-transparent transition-colors",
    hasError
      ? "border-red-500 focus:ring-red-400"
      : "border-gray-300 dark:border-gray-600 focus:ring-blue-500",
  ].join(" ");
}

export default function ContactForm() {
  // --- State tanımları ---
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // --- Tek alan güncelleme —
  // Kullanıcı yazmaya başlayınca o alanın hata mesajı temizlenir (anlık UX)
  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Hata varsa temizle
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  // --- Form gönderimi ---
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Sayfanın yenilenmesini engelle

    // Doğrula
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Hata varsa gönderme
    }

    setIsSubmitting(true);
    try {
      // Simüle edilmiş API çağrısı — 1.5 saniyelik bekleme
      await new Promise<void>((resolve) => setTimeout(resolve, 1500));
      console.log("Form verisi gönderildi:", formData);
      setSubmitSuccess(true);
      setFormData(INITIAL_FORM); // Formu sıfırla
      setErrors({});
    } catch {
      alert("Gönderim başarısız. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // --- Başarı ekranı ---
  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
          Mesajınız Gönderildi!
        </h3>
        <p className="text-green-700 dark:text-green-300 mb-6">
          En kısa sürede size geri döneceğim.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="text-sm text-green-700 dark:text-green-400 underline underline-offset-2 hover:text-green-900 dark:hover:text-green-200 transition-colors"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  // --- Form ---
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate // HTML5 native validasyonu kapat — kendi validasyonumuzu kullanıyoruz
      aria-label="İletişim formu"
    >
      {/* Ad Soyad */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Ad Soyad <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Örn. Ahmet Yılmaz"
          className={fieldClass(!!errors.name)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          autoComplete="name"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      {/* E-posta */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          E-posta <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="ornek@mail.com"
          className={fieldClass(!!errors.email)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          autoComplete="email"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Konu (select) */}
      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Konu <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <select
          id="contact-subject"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={fieldClass(!!errors.subject)}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        >
          <option value="">Konu seçiniz...</option>
          <option value="genel">Genel</option>
          <option value="is-teklifi">İş Teklifi</option>
          <option value="teknik-destek">Teknik Destek</option>
          <option value="oneri">Öneri</option>
          <option value="isbirligi">İş Birliği</option>
        </select>
        {errors.subject && (
          <p id="subject-error" role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Mesaj (textarea) */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Mesaj <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Mesajınızı buraya yazınız... (en az 10 karakter)"
          className={`${fieldClass(!!errors.message)} resize-y`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {/* Karakter sayacı */}
        <div className="flex justify-between mt-1">
          {errors.message ? (
            <p id="message-error" role="alert" className="text-sm text-red-600 dark:text-red-400">
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-gray-400 dark:text-gray-500 tabular-nums">
            {formData.message.length} karakter
          </span>
        </div>
      </div>

      {/* Gönder butonu — gönderilirken disabled */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span
              className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
              aria-hidden="true"
            />
            Gönderiliyor...
          </span>
        ) : (
          "Gönder 📨"
        )}
      </button>

      <p className="text-xs text-center text-gray-400 dark:text-gray-500">
        <span className="text-red-500">*</span> işaretli alanlar zorunludur
      </p>
    </form>
  );
}
