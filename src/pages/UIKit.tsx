import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import Alert from '../components/Alert'

export default function UIKit() {
    const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([])
    const dismiss = (id: string) => setDismissedAlerts(prev => [...prev, id])

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6 md:p-10 space-y-14">

            {/* Başlık */}
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    🎨 UI Kit
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                    LAB-4 component kütüphanesi — tüm varyantlar tek sayfada.
                </p>
            </div>

            {/* ==================== BUTTONS ==================== */}
            <section className="max-w-5xl mx-auto space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Buttons
                </h2>

                {/* Varyant 1-4: Renk varyantları */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">Renk Varyantları</p>
                    <div className="flex flex-wrap gap-3 items-center">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                </div>

                {/* Varyant 5-7: Boyut varyantları */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">Boyut Varyantları</p>
                    <div className="flex flex-wrap gap-3 items-end">
                        <Button variant="primary" size="sm">Small</Button>
                        <Button variant="primary" size="md">Medium</Button>
                        <Button variant="primary" size="lg">Large</Button>
                    </div>
                </div>

                {/* Disabled durumu */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">Disabled Durumu</p>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary" disabled>Disabled Primary</Button>
                        <Button variant="secondary" disabled>Disabled Secondary</Button>
                        <Button variant="danger" disabled>Disabled Danger</Button>
                    </div>
                </div>
            </section>

            {/* ==================== INPUTS ==================== */}
            <section className="max-w-5xl mx-auto space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Inputs
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Varyant 8: Normal */}
                    <div>
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Normal Input</p>
                        <Input
                            id="ui-normal"
                            label="Ad Soyad"
                            placeholder="Örn. Ahmet Yılmaz"
                        />
                    </div>

                    {/* Varyant 9: Hatalı */}
                    <div>
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Error Durumu</p>
                        <Input
                            id="ui-error"
                            label="E-posta"
                            type="email"
                            defaultValue="gecersiz-email"
                            error="Geçerli bir e-posta adresi girin."
                        />
                    </div>

                    {/* Varyant 10: Help text */}
                    <div>
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Help Text</p>
                        <Input
                            id="ui-help"
                            label="Şifre"
                            type="password"
                            helpText="En az 8 karakter, 1 büyük harf ve 1 rakam içermeli."
                        />
                    </div>

                    {/* Varyant 11: Disabled */}
                    <div>
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Disabled</p>
                        <Input
                            id="ui-disabled"
                            label="Kullanıcı Adı"
                            disabled
                            defaultValue="sefa.imamoglu"
                        />
                    </div>
                </div>
            </section>

            {/* ==================== CARDS ==================== */}
            <section className="max-w-5xl mx-auto space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Cards
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Varyant 12: Elevated */}
                    <div>
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Elevated (Gölgeli)</p>
                        <Card
                            variant="elevated"
                            title="Elevated Card"
                            image="https://placehold.co/400x200/1E3A8A/FFFFFF?text=Elevated"
                            imageAlt="Elevated card örneği"
                            footer={<Button variant="primary" size="sm">Detay</Button>}
                        >
                            Gölge efektiyle yükseltilmiş kart. Hover'da gölge büyür.
                        </Card>
                    </div>

                    {/* Varyant 13: Outlined */}
                    <div>
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Outlined (Kenarlıklı)</p>
                        <Card
                            variant="outlined"
                            title="Outlined Card"
                            image="https://placehold.co/400x200/7C3AED/FFFFFF?text=Outlined"
                            imageAlt="Outlined card örneği"
                            footer={<Button variant="secondary" size="sm">Düzenle</Button>}
                        >
                            Kenarlıklı, gölgesiz kart. İkincil içerikler için kullanılır.
                        </Card>
                    </div>

                    {/* Varyant 14: Filled */}
                    <div>
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Filled (Dolgulu)</p>
                        <Card
                            variant="filled"
                            title="Filled Card"
                            footer={<Button variant="ghost" size="sm">Kapat</Button>}
                        >
                            Dolgulu arka plan ile sade bir kart. Bilgi kutuları için.
                        </Card>
                    </div>

                </div>
            </section>

            {/* ==================== ALERTS ==================== */}
            <section className="max-w-5xl mx-auto space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Alerts
                </h2>

                {/* Varyant 15: Info */}
                <div>
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Info</p>
                    <Alert variant="info" title="Bilgi">
                        Formunuz başarıyla kaydedildi. Onay e-postası gönderildi.
                    </Alert>
                </div>

                {/* Varyant 16: Success */}
                <div>
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Success</p>
                    <Alert variant="success" title="Başarılı">
                        İşlem tamamlandı! Hesabınız aktive edildi.
                    </Alert>
                </div>

                {/* Varyant 17: Warning */}
                <div>
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Warning</p>
                    <Alert variant="warning" title="Uyarı">
                        Oturumunuz 5 dakika sonra sona erecek. Değişikliklerinizi kaydedin.
                    </Alert>
                </div>

                {/* Varyant 18: Error + Dismissible */}
                <div>
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Error (Kapatılabilir)</p>
                    {dismissedAlerts.includes('error-1') ? (
                        <p className="text-sm text-gray-400 italic">Alert kapatıldı. ✓</p>
                    ) : (
                        <Alert
                            variant="error"
                            title="Hata"
                            dismissible
                            onDismiss={() => dismiss('error-1')}
                        >
                            Bağlantı kurulamadı. Lütfen internet bağlantınızı kontrol edin.
                        </Alert>
                    )}
                </div>

                {/* Varyant 19: Warning + Dismissible */}
                <div>
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Warning (Kapatılabilir)</p>
                    {dismissedAlerts.includes('warn-1') ? (
                        <p className="text-sm text-gray-400 italic">Alert kapatıldı. ✓</p>
                    ) : (
                        <Alert
                            variant="warning"
                            title="Tarayıcı Uyarısı"
                            dismissible
                            onDismiss={() => dismiss('warn-1')}
                        >
                            Bu özellik eski tarayıcılarda düzgün çalışmayabilir.
                        </Alert>
                    )}
                </div>
            </section>

            {/* Alt bilgi */}
            <footer className="max-w-5xl mx-auto text-center text-gray-400 dark:text-gray-600 text-sm pb-6">
                <p>LAB-4 UI Kit · 8+ component varyantı · Sefa İmamoğlu</p>
            </footer>

        </div>
    )
}
