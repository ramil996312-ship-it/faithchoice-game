// Строки интерфейса по языкам. Контент историй — отдельно, в content-<lang>.js.
const I18N = {
  ru: { title: 'Истории Веры', next: 'Далее →', ended: 'История завершена.', back: '← К выбору историй', dark: 'Тьма', light: 'Свет', comingSoon: 'Эта история пока не переведена.', basedOnTrue: 'По мотивам реальной истории', exit: '← Меню',
    ageGateTitle: 'Прежде чем начать', ageGateBody: 'Это истории реальных людей, и некоторые из них говорят о тяжёлых вещах: насилии, зависимостях, торговле людьми, попытках самоубийства. Сайт рассчитан на взрослую аудиторию. Если вам сейчас по-настоящему тяжело — пожалуйста, не оставайтесь с этим наедине: поговорите с близким человеком или обратитесь на горячую линию психологической помощи в вашей стране.', ageGateButton: 'Мне есть 17, продолжить',
    storyDone: 'История пройдена' },
  en: { title: 'Faith Choice', next: 'Next →', ended: 'The story has ended.', back: '← Back to stories', dark: 'Darkness', light: 'Light', comingSoon: "This story hasn't been translated yet.", basedOnTrue: 'Based on a true story', exit: '← Menu',
    ageGateTitle: 'Before you begin', ageGateBody: "These are true stories, and some of them touch on difficult subjects: violence, addiction, human trafficking, suicide attempts. This site is intended for a mature audience. If you're genuinely struggling right now, please don't carry it alone — talk to someone you trust, or reach out to a crisis helpline in your country.", ageGateButton: "I'm 17 or older, continue",
    storyDone: 'Story completed' },
  es: { title: 'Historias reales', next: 'Siguiente →', ended: 'La historia ha terminado.', back: '← Volver a las historias', dark: 'Oscuridad', light: 'Luz', comingSoon: 'Esta historia todavía no está traducida.', basedOnTrue: 'Basado en una historia real', exit: '← Menú',
    ageGateTitle: 'Antes de empezar', ageGateBody: 'Estas son historias reales, y algunas tratan temas difíciles: violencia, adicciones, trata de personas, intentos de suicidio. Este sitio está pensado para un público adulto. Si en este momento lo estás pasando realmente mal, por favor no lo enfrentes solo: habla con alguien de confianza o contacta una línea de ayuda en tu país.', ageGateButton: 'Tengo 17 años o más, continuar',
    storyDone: 'Historia completada' },
  zh: { title: '真实的故事', next: '下一步 →', ended: '故事已结束。', back: '← 返回故事列表', dark: '黑暗', light: '光明', comingSoon: '这个故事还没有翻译。', basedOnTrue: '根据真实故事改编', exit: '← 菜单',
    ageGateTitle: '开始之前', ageGateBody: '这些都是真实的故事,其中一些涉及沉重的话题:暴力、成瘾、人口贩卖、自杀企图。本网站面向成年读者。如果你现在真的很痛苦,请不要独自承受——和你信任的人谈谈,或联系你所在地区的心理援助热线。', ageGateButton: '我已年满17岁,继续',
    storyDone: '故事已读完' },
  hi: { title: 'सच्ची कहानियाँ', next: 'आगे →', ended: 'कहानी समाप्त हुई।', back: '← कहानियों की सूची पर वापस', dark: 'अंधकार', light: 'प्रकाश', comingSoon: 'इस कहानी का अनुवाद अभी बाकी है।', basedOnTrue: 'एक सच्ची कहानी पर आधारित', exit: '← मेनू',
    ageGateTitle: 'शुरू करने से पहले', ageGateBody: 'ये सच्ची कहानियाँ हैं, और इनमें से कुछ कठिन विषयों को छूती हैं: हिंसा, नशे की लत, मानव तस्करी, आत्महत्या के प्रयास। यह साइट वयस्क दर्शकों के लिए है। अगर आप अभी सचमुच मुश्किल दौर से गुज़र रहे हैं, तो कृपया इसे अकेले न झेलें — किसी भरोसेमंद व्यक्ति से बात करें, या अपने देश की मानसिक सहायता हेल्पलाइन से संपर्क करें।', ageGateButton: 'मेरी उम्र 17 या उससे अधिक है, जारी रखें',
    storyDone: 'कहानी पूरी हो चुकी है' },
};

if (typeof module !== 'undefined' && module.exports) module.exports = { I18N };
else if (typeof window !== 'undefined') window.I18N = I18N;
