
// Privacy Policy Translations
// This file extends the main translations object with privacy policy content

const privacyContent = {
    en: {
        last_updated: "Last updated: January 29, 2026",
        intro_1: "ZenpleLife (\"we,\" \"our,\" or \"us\") operates the ABC Scan mobile application (the \"App\"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Service and the choices you have associated with that data.",
        intro_2: "By using the Service, you agree to the collection and use of information in accordance with this policy.",

        section_1: {
            title: "Information Collection and Use",
            content: "To provide a better experience and ensure the functionality of our business card scanning features, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy."
        },

        section_1a: {
            title: "A. Permissions We Request",
            content: "For ABC Scan to function as a business card scanner, we require the following sensitive permissions on your device:",
            list: {
                camera: "<strong>Camera:</strong> We use your device’s camera to capture images of business cards for Optical Character Recognition (OCR) processing.",
                gallery: "<strong>Photo Gallery (Storage/Media):</strong> We request access to your photo gallery to allow you to upload existing images of business cards for scanning.",
                contacts: "<strong>Contacts:</strong> We request access to your contact list (Read/Write) solely for the purpose of saving the scanned business card details directly into your device’s native address book at your request. We do not upload your contact list to our servers for any other purpose."
            }
        },

        section_1b: {
            title: "B. Personal Data",
            content: "When you register an account via Firebase Authentication, we may collect:",
            list: {
                email: "Email address",
                name: "Name",
                profile: "Profile picture (if applicable via social login)"
            }
        },

        section_1c: {
            title: "C. Scanned Data",
            content: "The business card data you scan (names, phone numbers, company names, etc.) is processed to convert the image to text. If you choose to save this data to the cloud, it is stored securely using Google Firebase services so you can access it across devices."
        },

        section_2: {
            title: "Third-Party Service Providers",
            content: "The App uses third-party services that may collect information used to identify you. Below are the links to the privacy policies of the third-party service providers used by the App:",
            list: {
                play_services: "<strong>Google Play Services</strong>",
                admob: "<strong>AdMob:</strong> We use AdMob to display advertisements. AdMob may use cookies and unique device identifiers (Advertising ID) to serve personalized ads based on your interests.",
                admob_link: "View AdMob Privacy Policy",
                firebase: "<strong>Google Firebase:</strong> We use Firebase for authentication (logging you in), analytics, and database storage (saving your scanned cards).",
                firebase_link: "View Firebase Privacy Policy"
            }
        },

        section_3: {
            title: "Log Data",
            content: "We want to inform you that whenever you use our Service, in a case of an error in the App, we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics."
        },

        section_4: {
            title: "Security",
            content: "We value your trust in providing us your Personal Information and your scanned data. We utilize industry-standard security measures provided by Google Firebase to protect your data during transmission and storage. However, remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security."
        },

        section_5: {
            title: "Children’s Privacy",
            content: "These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to perform the necessary actions."
        },

        section_6: {
            title: "Changes to This Privacy Policy",
            content: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page."
        },

        section_7: {
            title: "Contact Us",
            content: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.",
            company_label: "Company",
            email_label: "Email"
        }
    },
    es: {
        last_updated: "Última actualización: 29 de enero de 2026",
        intro_1: "ZenpleLife (\"nosotros\", \"nuestro\" o \"nos\") opera la aplicación móvil ABC Scan (la \"Aplicación\"). Esta página le informa sobre nuestras políticas con respecto a la recopilación, el uso y la divulgación de Información Personal cuando utiliza nuestro Servicio y las opciones que tiene asociadas con esos datos.",
        intro_2: "Al utilizar el Servicio, usted acepta la recopilación y el uso de información de acuerdo con esta política.",

        section_1: {
            title: "Recopilación y Uso de Información",
            content: "Para brindar una mejor experiencia y garantizar la funcionalidad de nuestras funciones de escaneo de tarjetas de visita, es posible que le solicitemos que nos proporcione cierta información de identificación personal. La información que solicitamos será retenida por nosotros y utilizada como se describe en esta política de privacidad."
        },

        section_1a: {
            title: "A. Permisos que Solicitamos",
            content: "Para que ABC Scan funcione como un escáner de tarjetas de visita, requerimos los siguientes permisos confidenciales en su dispositivo:",
            list: {
                camera: "<strong>Cámara:</strong> Usamos la cámara de su dispositivo para capturar imágenes de tarjetas de visita para el procesamiento de Reconocimiento Óptico de Caracteres (OCR).",
                gallery: "<strong>Galería de Fotos (Almacenamiento/Medios):</strong> Solicitamos acceso a su galería de fotos para permitirle cargar imágenes existentes de tarjetas de visita para escanear.",
                contacts: "<strong>Contactos:</strong> Solicitamos acceso a su lista de contactos (Lectura/Escritura) únicamente con el fin de guardar los detalles de la tarjeta de visita escaneada directamente en la libreta de direcciones nativa de su dispositivo cuando usted lo solicite. No subimos su lista de contactos a nuestros servidores para ningún otro propósito."
            }
        },

        section_1b: {
            title: "B. Datos Personales",
            content: "Cuando registra una cuenta a través de Autenticación de Firebase, podemos recopilar:",
            list: {
                email: "Dirección de correo electrónico",
                name: "Nombre",
                profile: "Foto de perfil (si corresponde a través del inicio de sesión social)"
            }
        },

        section_1c: {
            title: "C. Datos Escaneados",
            content: "Los datos de la tarjeta de visita que escanea (nombres, números de teléfono, nombres de empresas, etc.) se procesan para convertir la imagen en texto. Si elige guardar estos datos en la nube, se almacenan de forma segura utilizando los servicios de Google Firebase para que pueda acceder a ellos en todos sus dispositivos."
        },

        section_2: {
            title: "Proveedores de Servicios Externos",
            content: "La Aplicación utiliza servicios de terceros que pueden recopilar información utilizada para identificarlo. A continuación se encuentran los enlaces a las políticas de privacidad de los proveedores de servicios externos utilizados por la Aplicación:",
            list: {
                play_services: "<strong>Google Play Services</strong>",
                admob: "<strong>AdMob:</strong> Usamos AdMob para mostrar anuncios. AdMob puede usar cookies e identificadores de dispositivos únicos (ID de publicidad) para mostrar anuncios personalizados basados en sus intereses.",
                admob_link: "Ver Política de Privacidad de AdMob",
                firebase: "<strong>Google Firebase:</strong> Usamos Firebase para autenticación (iniciar sesión), análisis y almacenamiento de bases de datos (guardar sus tarjetas escaneadas).",
                firebase_link: "Ver Política de Privacidad de Firebase"
            }
        },

        section_3: {
            title: "Datos de Registro",
            content: "Queremos informarle que cada vez que utiliza nuestro Servicio, en caso de un error en la Aplicación, recopilamos datos e información (a través de productos de terceros) en su teléfono llamados Datos de Registro. Estos Datos de Registro pueden incluir información como la dirección de Protocolo de Internet (\"IP\") de su dispositivo, el nombre del dispositivo, la versión del sistema operativo, la configuración de la aplicación al utilizar nuestro Servicio, la hora y fecha de su uso del Servicio y otras estadísticas."
        },

        section_4: {
            title: "Seguridad",
            content: "Valoramos su confianza al proporcionarnos su Información Personal y sus datos escaneados. Utilizamos medidas de seguridad estándar de la industria proporcionadas por Google Firebase para proteger sus datos durante la transmisión y el almacenamiento. Sin embargo, recuerde que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro y confiable, y no podemos garantizar su seguridad absoluta."
        },

        section_5: {
            title: "Privacidad de los Niños",
            content: "Estos Servicios no están dirigidos a menores de 13 años. No recopilamos a sabiendas información de identificación personal de niños menores de 13 años. En caso de que descubramos que un niño menor de 13 años nos ha proporcionado información personal, la eliminamos inmediatamente de nuestros servidores. Si usted es padre o tutor y tiene conocimiento de que su hijo nos ha proporcionado información personal, comuníquese con nosotros para que podamos realizar las acciones necesarias."
        },

        section_6: {
            title: "Cambios en esta Política de Privacidad",
            content: "Podemos actualizar nuestra Política de Privacidad de vez en cuando. Por lo tanto, se le aconseja revisar esta página periódicamente para ver si hay cambios. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Estos cambios entran en vigencia inmediatamente después de su publicación en esta página."
        },

        section_7: {
            title: "Contáctenos",
            content: "Si tiene alguna pregunta o sugerencia sobre nuestra Política de Privacidad, no dude en contactarnos.",
            company_label: "Empresa",
            email_label: "Correo electrónico"
        }
    },
    'zh-TW': {
        last_updated: "最後更新：2026年1月29日",
        intro_1: "ZenpleLife（「我們」）營運 ABC Scan 行動應用程式（「應用程式」）。本頁面告知您關於我們在您使用我們的服務時收集、使用和揭露個人資訊的政策，以及您與該數據相關的選擇。",
        intro_2: "透過使用本服務，即表示您同意依照本政策收集和使用資訊。",

        section_1: {
            title: "資訊收集與使用",
            content: "為了提供更好的體驗並確保我們的名片掃描功能正常運作，我們可能會要求您向我們提供某些個人身分資訊。我們要求提供的資訊將由我們保留並依照本隱私權政策所述進行使用。"
        },

        section_1a: {
            title: "A. 我們請求的權限",
            content: "為了讓 ABC Scan 作為名片掃描器運作，我們需要您裝置上的以下敏感權限：",
            list: {
                camera: "<strong>相機：</strong> 我們使用您裝置的相機拍攝名片影像，以便進行光學字元辨識 (OCR) 處理。",
                gallery: "<strong>相簿 (儲存/媒體)：</strong> 我們請求存取您的相簿，以便您上傳現有的名片影像進行掃描。",
                contacts: "<strong>聯絡人：</strong> 我們請求存取您的聯絡人清單 (讀取/寫入)，僅為了在您請求時將掃描的名片詳細資訊直接儲存到您裝置的原生通訊錄中。我們不會出於任何其他目的將您的聯絡人清單上傳到我們的伺服器。"
            }
        },

        section_1b: {
            title: "B. 個人數據",
            content: "當您透過 Firebase 驗證註冊帳戶時，我們可能會收集：",
            list: {
                email: "電子郵件地址",
                name: "姓名",
                profile: "個人資料照片 (如果適用於社交登入)"
            }
        },

        section_1c: {
            title: "C. 掃描數據",
            content: "您掃描的名片數據 (姓名、電話號碼、公司名稱等) 經過處理將影像轉換為文字。如果您選擇將此數據儲存到雲端，它將使用 Google Firebase 服務安全地儲存，以便您可以跨裝置存取。"
        },

        section_2: {
            title: "第三方服務提供者",
            content: "本應用程式使用第三方服務，這些服務可能會收集用於識別您身分的資訊。以下是本應用程式使用的第三方服務提供者的隱私權政策連結：",
            list: {
                play_services: "<strong>Google Play Services</strong>",
                admob: "<strong>AdMob：</strong>我們使用 AdMob 顯示廣告。AdMob 可能會使用 Cookie 和唯一裝置識別碼 (廣告 ID) 來根據您的興趣顯示個人化廣告。",
                admob_link: "檢視 AdMob 隱私權政策",
                firebase: "<strong>Google Firebase：</strong>我們使用 Firebase 進行驗證 (登入)、分析和資料庫儲存 (儲存您掃描的名片)。",
                firebase_link: "檢視 Firebase 隱私權政策"
            }
        },

        section_3: {
            title: "紀錄數據",
            content: "我們要通知您，每當您使用我們的服務時，如果應用程式發生錯誤，我們會透過第三方產品在您的手機上收集稱為「紀錄數據」的數據和資訊。此紀錄數據可能包含諸如您裝置的網際網路通訊協定 (IP) 位址、裝置名稱、作業系統版本、使用我們服務時的應用程式設定、您使用服務的時間和日期以及其他統計數據等資訊。"
        },

        section_4: {
            title: "安全性",
            content: "我們重視您在提供個人資訊和掃描數據方面對我們的信任。我們利用 Google Firebase 提供的業界標準安全措施來保護您在傳輸和儲存期間的數據。但是，請記住，沒有任何網際網路傳輸方法或電子儲存方法是 100% 安全可靠的，我們無法保證其絕對安全。"
        },

        section_5: {
            title: "兒童隱私",
            content: "這些服務不針對 13 歲以下的任何人。我們不會故意收集 13 歲以下兒童的個人身分資訊。如果我們發現 13 歲以下的兒童向我們提供了個人資訊，我們會立即從我們的伺服器中刪除這些資訊。如果您是父母或監護人，並且您知道您的孩子向我們提供了個人資訊，請與我們聯繫，以便我們能夠採取必要的行動。"
        },

        section_6: {
            title: "本隱私權政策的變更",
            content: "我們可能會不時更新我們的隱私權政策。因此，建議您定期查看本頁面以了解任何變更。我們會透過在本頁面上發布新的隱私權政策來通知您任何變更。這些變更在發布到本頁面後立即生效。"
        },

        section_7: {
            title: "聯絡我們",
            content: "如果您對我們的隱私權政策有任何疑問或建議，請隨時與我們聯繫。",
            company_label: "公司",
            email_label: "電子郵件"
        }
    },
    ar: {
        last_updated: "آخر تحديث: 29 يناير 2026",
        intro_1: "تقوم ZenpleLife (\"نحن\" أو \"نا\") بتشغيل تطبيق ABC Scan للهاتف المحمول (\"التطبيق\"). تعلمك هذه الصفحة بسياساتنا المتعلقة بجمع المعلومات الشخصية واستخدامها والإفصاح عنها عند استخدام خدمتنا والخيارات المرتبطة بهذه البيانات.",
        intro_2: "باستخدام الخدمة، فإنك توافق على جمع المعلومات واستخدامها وفقاً لهذه السياسة.",

        section_1: {
            title: "جمع المعلومات واستخدامها",
            content: "لتوفير تجربة أفضل وضمان وظائف ميزات مسح بطاقات العمل الخاصة بنا، قد نطلب منك تزويدنا بمعلومات تعريف شخصية معينة. سيتم الاحتفاظ بالمعلومات التي نطلبها واستخدامها كما هو موضح في سياسة الخصوصية هذه."
        },

        section_1a: {
            title: "أ. الأذونات التي نطلبها",
            content: "لكي يعمل ABC Scan كماسح لبطاقات العمل، نطلب الأذونات الحساسة التالية على جهازك:",
            list: {
                camera: "<strong>الكاميرا:</strong> نستخدم كاميرا جهازك لالتقاط صور بطاقات العمل لمعالجة التعرف الضوئي على الحروف (OCR).",
                gallery: "<strong>معرض الصور (تخزين/وسائط):</strong> نطلب الوصول إلى معرض الصور الخاص بك للسماح لك بتحميل صور بطاقات العمل الموجودة مسبقاً للمسح الضوئي.",
                contacts: "<strong>جهات الاتصال:</strong> نطلب الوصول إلى قائمة جهات الاتصال الخاصة بك (قراءة/كتابة) فقط لغرض حفظ تفاصيل بطاقة العمل الممسوحة ضوئياً مباشرة في دفتر العناوين الأصلي لجهازك بناءً على طلبك. لا نقوم بتحميل قائمة جهات الاتصال الخاصة بك إلى خوادمنا لأي غرض آخر."
            }
        },

        section_1b: {
            title: "ب. البيانات الشخصية",
            content: "عند تسجيل حساب عبر Firebase Authentication، قد نجمع:",
            list: {
                email: "عنوان البريد الإلكتروني",
                name: "الاسم",
                profile: "صورة الملف الشخصي (إذا كان ذلك مناسباً عبر تسجيل الدخول الاجتماعي)"
            }
        },

        section_1c: {
            title: "ج. البيانات الممسوحة ضوئياً",
            content: "تتم معالجة بيانات بطاقة العمل التي تمسحها ضوئياً (الأسماء، وأرقام الهواتف، وأسماء الشركات، وما إلى ذلك) لتحويل الصورة إلى نص. إذا اخترت حفظ هذه البيانات في السحابة، يتم تخزينها بشكل آمن باستخدام خدمات Google Firebase حتى تتمكن من الوصول إليها عبر الأجهزة."
        },

        section_2: {
            title: "مقدمو الخدمات من أطراف ثالثة",
            content: "يستخدم التطبيق خدمات جهات خارجية قد تجمع معلومات تستخدم لتحديد هويتك. فيما يلي روابط لسياسات الخصوصية لمقدمي الخدمات الخارجيين الذين يستخدمهم التطبيق:",
            list: {
                play_services: "<strong>Google Play Services</strong>",
                admob: "<strong>AdMob:</strong> نستخدم AdMob لعرض الإعلانات. قد يستخدم AdMob ملفات تعريف الارتباط ومعرفات الأجهزة الفريدة (معرف الإعلان) لعرض إعلانات مخصصة بناءً على اهتماماتك.",
                admob_link: "عرض سياسة خصوصية AdMob",
                firebase: "<strong>Google Firebase:</strong> نستخدم Firebase للمصادقة (تسجيل الدخول)، والتحليلات، وتخزين قاعدة البيانات (حفظ بطاقاتك الممسوحة ضوئياً).",
                firebase_link: "عرض سياسة خصوصية Firebase"
            }
        },

        section_3: {
            title: "بيانات السجل",
            content: "نريد إبلاغك أنه كلما استخدمت خدمتنا، في حالة حدوث خطأ في التطبيق، نقوم بجمع البيانات والمعلومات (من خلال منتجات جهات خارجية) على هاتفك تسمى بيانات السجل. قد تتضمن بيانات السجل هذه معلومات مثل عنوان بروتوكول الإنترنت (\"IP\") لجهازك، واسم الجهاز، وإصدار نظام التشغيل، وتكوين التطبيق عند استخدام خدمتنا، ووقت وتاريخ استخدامك للخدمة، وإحصاءات أخرى."
        },

        section_4: {
            title: "الأمان",
            content: "نحن نقدر ثقتك في تزويدنا بمعلوماتك الشخصية وبياناتك الممسوحة ضوئياً. نستخدم تدابير أمان متوافقة مع معايير الصناعة التي توفرها Google Firebase لحماية بياناتك أثناء النقل والتخزين. ومع ذلك، تذكر أنه لا توجد طريقة نقل عبر الإنترنت أو طريقة تخزين إلكتروني آمنة وموثوقة بنسبة 100٪، ولا يمكننا ضمان أمانها المطلق."
        },

        section_5: {
            title: "خصوصية الأطفال",
            content: "لا تخاطب هذه الخدمات أي شخص يقل عمره عن 13 عاماً. نحن لا نجمع عن عمد معلومات تعريف شخصية من الأطفال دون سن 13 عاماً. في حالة اكتشافنا أن طفلاً دون سن 13 عاماً قد زودنا بمعلومات شخصية، نقوم بحذفها فوراً من خوادمنا. إذا كنت والداً أو وصياً وكنت تعلم أن طفلك قد زودنا بمعلومات شخصية، يرجى الاتصال بنا حتى نتمكن من اتخاذ الإجراءات اللازمة."
        },

        section_6: {
            title: "التغييرات على سياسة الخصوصية هذه",
            content: "قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. وبالتالي، ننصحك بمراجعة هذه الصفحة بشكل دوري بحثاً عن أي تغييرات. سنقوم بإعلامك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة. هذه التغييرات سارية المفعول فور نشرها على هذه الصفحة."
        },

        section_7: {
            title: "اتصل بنا",
            content: "إذا كان لديك أي أسئلة أو اقتراحات حول سياسة الخصوصية الخاصة بنا، فلا تتردد في الاتصال بنا.",
            company_label: "الشركة",
            email_label: "البريد الإلكتروني"
        }
    },
    de: {
        last_updated: "Zuletzt aktualisiert: 29. Januar 2026",
        intro_1: "ZenpleLife (\"wir\", \"unser\" oder \"uns\") betreibt die mobile Anwendung ABC Scan (die \"App\"). Diese Seite informiert Sie über unsere Richtlinien bezüglich der Sammlung, Verwendung und Offenlegung von persönlichen Daten, wenn Sie unseren Service nutzen, sowie über die Wahlmöglichkeiten, die Sie im Zusammenhang mit diesen Daten haben.",
        intro_2: "Durch die Nutzung des Service stimmen Sie der Sammlung und Verwendung von Informationen gemäß dieser Richtlinie zu.",

        section_1: {
            title: "Sammlung und Verwendung von Informationen",
            content: "Um eine bessere Erfahrung zu bieten und die Funktionalität unserer Visitenkarten-Scanfunktionen zu gewährleisten, können wir verlangen, dass Sie uns bestimmte persönlich identifizierbare Informationen zur Verfügung stellen. Die von uns angeforderten Informationen werden von uns gespeichert und wie in dieser Datenschutzerklärung beschrieben verwendet."
        },

        section_1a: {
            title: "A. Berechtigungen, die wir anfordern",
            content: "Damit ABC Scan als Visitenkartenscanner funktionieren kann, benötigen wir die folgenden sensiblen Berechtigungen auf Ihrem Gerät:",
            list: {
                camera: "<strong>Kamera:</strong> Wir verwenden die Kamera Ihres Geräts, um Bilder von Visitenkarten für die optische Zeichenerkennung (OCR) zu erfassen.",
                gallery: "<strong>Fotogalerie (Speicher/Medien):</strong> Wir bitten um Zugriff auf Ihre Fotogalerie, damit Sie bestehende Bilder von Visitenkarten zum Scannen hochladen können.",
                contacts: "<strong>Kontakte:</strong> Wir bitten um Zugriff auf Ihre Kontaktliste (Lesen/Schreiben) ausschließlich zum Zweck, die gescannten Visitenkartendaten auf Ihre Anfrage hin direkt im nativen Adressbuch Ihres Geräts zu speichern. Wir laden Ihre Kontaktliste zu keinem anderen Zweck auf unsere Server hoch."
            }
        },

        section_1b: {
            title: "B. Persönliche Daten",
            content: "Wenn Sie ein Konto über Firebase Authentication registrieren, erfassen wir möglicherweise:",
            list: {
                email: "E-Mail-Adresse",
                name: "Name",
                profile: "Profilbild (falls über Social Login zutreffend)"
            }
        },

        section_1c: {
            title: "C. Gescannte Daten",
            content: "Die von Ihnen gescannten Visitenkartendaten (Namen, Telefonnummern, Firmennamen usw.) werden verarbeitet, um das Bild in Text umzuwandeln. Wenn Sie sich entscheiden, diese Daten in der Cloud zu speichern, werden sie sicher mit Google Firebase-Diensten gespeichert, sodass Sie geräteübergreifend darauf zugreifen können."
        },

        section_2: {
            title: "Drittanbieter-Dienstleister",
            content: "Die App verwendet Dienste von Drittanbietern, die möglicherweise Informationen sammeln, die verwendet werden, um Sie zu identifizieren. Nachfolgend finden Sie die Links zu den Datenschutzrichtlinien der von der App verwendeten Drittanbieter:",
            list: {
                play_services: "<strong>Google Play Services</strong>",
                admob: "<strong>AdMob:</strong> Wir verwenden AdMob, um Werbung anzuzeigen. AdMob kann Cookies und eindeutige Gerätekennungen (Werbe-ID) verwenden, um personalisierte Anzeigen basierend auf Ihren Interessen bereitzustellen.",
                admob_link: "AdMob-Datenschutzerklärung ansehen",
                firebase: "<strong>Google Firebase:</strong> Wir verwenden Firebase für die Authentifizierung (Anmeldung), Analyse und Datenbankspeicherung (Speicherung Ihrer gescannten Karten).",
                firebase_link: "Firebase-Datenschutzerklärung ansehen"
            }
        },

        section_3: {
            title: "Log-Daten",
            content: "Wir möchten Sie darüber informieren, dass wir bei jedem Besuch unseres Dienstes im Falle eines Fehlers in der App Daten und Informationen (durch Produkte von Drittanbietern) auf Ihrem Telefon sammeln, die als Log-Daten bezeichnet werden. Diese Log-Daten können Informationen wie die Internet-Protokoll-Adresse (\"IP\") Ihres Geräts, den Gerätenamen, die Betriebssystemversion, die Konfiguration der App bei der Nutzung unseres Dienstes, die Uhrzeit und das Datum Ihrer Nutzung des Dienstes und andere Statistiken enthalten."
        },

        section_4: {
            title: "Sicherheit",
            content: "Wir schätzen Ihr Vertrauen, uns Ihre persönlichen Informationen und gescannten Daten zur Verfügung zu stellen. Wir verwenden branchenübliche Sicherheitsmaßnahmen von Google Firebase, um Ihre Daten während der Übertragung und Speicherung zu schützen. Denken Sie jedoch daran, dass keine Übertragungsmethode über das Internet oder elektronische Speichermethode zu 100% sicher und zuverlässig ist und wir keine absolute Sicherheit garantieren können."
        },

        section_5: {
            title: "Datenschutz für Kinder",
            content: "Diese Dienste richten sich nicht an Personen unter 13 Jahren. Wir sammeln nicht wissentlich persönlich identifizierbare Informationen von Kindern unter 13 Jahren. Falls wir feststellen, dass ein Kind unter 13 Jahren uns persönliche Informationen zur Verfügung gestellt hat, löschen wir diese sofort von unseren Servern. Wenn Sie Elternteil oder Erziehungsberechtigter sind und wissen, dass Ihr Kind uns persönliche Informationen zur Verfügung gestellt hat, kontaktieren Sie uns bitte, damit wir die erforderlichen Maßnahmen ergreifen können."
        },

        section_6: {
            title: "Änderungen an dieser Datenschutzerklärung",
            content: "Wir können unsere Datenschutzerklärung von Zeit zu Zeit aktualisieren. Daher wird empfohlen, diese Seite regelmäßig auf Änderungen zu überprüfen. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen. Diese Änderungen treten sofort nach ihrer Veröffentlichung auf dieser Seite in Kraft."
        },

        section_7: {
            title: "Kontaktieren Sie uns",
            content: "Wenn Sie Fragen oder Anregungen zu unserer Datenschutzerklärung haben, zögern Sie nicht, uns zu kontaktieren.",
            company_label: "Unternehmen",
            email_label: "E-Mail"
        }
    },
    fr: {
        last_updated: "Dernière mise à jour : 29 janvier 2026",
        intro_1: "ZenpleLife (« nous », « notre » ou « nos ») exploite l'application mobile ABC Scan (l'« Application »). Cette page vous informe de nos politiques concernant la collecte, l'utilisation et la divulgation de données personnelles lorsque vous utilisez notre Service et les choix que vous avez associés à ces données.",
        intro_2: "En utilisant le Service, vous acceptez la collecte et l'utilisation d'informations conformément à cette politique.",

        section_1: {
            title: "Collecte et utilisation des informations",
            content: "Pour offrir une meilleure expérience et garantir la fonctionnalité de nos fonctionnalités de numérisation de cartes de visite, nous pouvons vous demander de nous fournir certaines informations personnellement identifiables. Les informations que nous demandons seront conservées par nous et utilisées comme décrit dans cette politique de confidentialité."
        },

        section_1a: {
            title: "A. Autorisations que nous demandons",
            content: "Pour qu'ABC Scan fonctionne comme un scanner de cartes de visite, nous avons besoin des autorisations sensibles suivantes sur votre appareil :",
            list: {
                camera: "<strong>Caméra :</strong> Nous utilisons la caméra de votre appareil pour capturer des images de cartes de visite pour le traitement de reconnaissance optique de caractères (OCR).",
                gallery: "<strong>Galerie photo (Stockage/Média) :</strong> Nous demandons l'accès à votre galerie photo pour vous permettre de télécharger des images existantes de cartes de visite pour la numérisation.",
                contacts: "<strong>Contacts :</strong> Nous demandons l'accès à votre liste de contacts (Lecture/Écriture) uniquement dans le but d'enregistrer les détails de la carte de visite numérisée directement dans le carnet d'adresses natif de votre appareil à votre demande. Nous ne téléchargeons pas votre liste de contacts sur nos serveurs à d'autres fins."
            }
        },

        section_1b: {
            title: "B. Données personnelles",
            content: "Lorsque vous enregistrez un compte via Firebase Authentication, nous pouvons collecter :",
            list: {
                email: "Adresse e-mail",
                name: "Nom",
                profile: "Photo de profil (le cas échéant via la connexion sociale)"
            }
        },

        section_1c: {
            title: "C. Données numérisées",
            content: "Les données de carte de visite que vous numérisez (noms, numéros de téléphone, noms d'entreprises, etc.) sont traitées pour convertir l'image en texte. Si vous choisissez d'enregistrer ces données dans le cloud, elles sont stockées en toute sécurité à l'aide des services Google Firebase afin que vous puissiez y accéder sur tous vos appareils."
        },

        section_2: {
            title: "Fournisseurs de services tiers",
            content: "L'Application utilise des services tiers qui peuvent collecter des informations utilisées pour vous identifier. Vous trouverez ci-dessous les liens vers les politiques de confidentialité des fournisseurs de services tiers utilisés par l'Application :",
            list: {
                play_services: "<strong>Google Play Services</strong>",
                admob: "<strong>AdMob :</strong> Nous utilisons AdMob pour afficher des publicités. AdMob peut utiliser des cookies et des identifiants d'appareil uniques (ID publicitaire) pour diffuser des annonces personnalisées en fonction de vos centres d'intérêt.",
                admob_link: "Voir la politique de confidentialité d'AdMob",
                firebase: "<strong>Google Firebase :</strong> Nous utilisons Firebase pour l'authentification (connexion), l'analyse et le stockage de base de données (enregistrement de vos cartes numérisées).",
                firebase_link: "Voir la politique de confidentialité de Firebase"
            }
        },

        section_3: {
            title: "Données de journal",
            content: "Nous tenons à vous informer que chaque fois que vous utilisez notre Service, en cas d'erreur dans l'Application, nous collectons des données et des informations (via des produits tiers) sur votre téléphone appelées Données de journal. Ces Données de journal peuvent inclure des informations telles que l'adresse de protocole Internet (« IP ») de votre appareil, le nom de l'appareil, la version du système d'exploitation, la configuration de l'application lors de l'utilisation de notre Service, l'heure et la date de votre utilisation du Service et d'autres statistiques."
        },

        section_4: {
            title: "Sécurité",
            content: "Nous apprécions votre confiance en nous fournissant vos informations personnelles et vos données numérisées. Nous utilisons des mesures de sécurité standard de l'industrie fournies par Google Firebase pour protéger vos données pendant la transmission et le stockage. Cependant, n'oubliez pas qu'aucune méthode de transmission sur Internet ou méthode de stockage électronique n'est sûre et fiable à 100 %, et nous ne pouvons garantir sa sécurité absolue."
        },

        section_5: {
            title: "Confidentialité des enfants",
            content: "Ces Services ne s'adressent à personne de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnellement identifiables auprès d'enfants de moins de 13 ans. Si nous découvrons qu'un enfant de moins de 13 ans nous a fourni des informations personnelles, nous les supprimons immédiatement de nos serveurs. Si vous êtes un parent ou un tuteur et que vous savez que votre enfant nous a fourni des informations personnelles, veuillez nous contacter afin que nous puissions prendre les mesures nécessaires."
        },

        section_6: {
            title: "Modifications de cette politique de confidentialité",
            content: "Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Par conséquent, il vous est conseillé de consulter cette page périodiquement pour tout changement. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page. Ces changements entrent en vigueur immédiatement après leur publication sur cette page."
        },

        section_7: {
            title: "Contactez-nous",
            content: "Si vous avez des questions ou des suggestions concernant notre politique de confidentialité, n'hésitez pas à nous contacter.",
            company_label: "Société",
            email_label: "E-mail"
        }
    },
    hi: {
        last_updated: "अंतिम अपडेट: 29 जनवरी 2026",
        intro_1: "ZenpleLife (\"हम\", \"हमारा\") ABC Scan मोबाइल एप्लिकेशन (\"ऐप\") संचालित करता है। यह पृष्ठ आपको हमारी सेवा का उपयोग करते समय व्यक्तिगत जानकारी के संग्रह, उपयोग और प्रकटीकरण के संबंध में हमारी नीतियों और उस डेटा से जुड़े आपके पास मौजूद विकल्पों के बारे में सूचित करता है।",
        intro_2: "सेवा का उपयोग करके, आप इस नीति के अनुसार जानकारी के संग्रह और उपयोग के लिए सहमत हैं।",

        section_1: {
            title: "जानकारी संग्रह और उपयोग",
            content: "बेहतर अनुभव प्रदान करने और हमारी बिजनेस कार्ड स्कैनिंग सुविधाओं की कार्यक्षमता सुनिश्चित करने के लिए, हमें आपसे हमें कुछ व्यक्तिगत रूप से पहचान योग्य जानकारी प्रदान करने की आवश्यकता हो सकती है। जो जानकारी हम अनुरोध करते हैं उसे हमारे द्वारा बनाए रखा जाएगा और इस गोपनीयता नीति में वर्णित अनुसार उपयोग किया जाएगा।"
        },

        section_1a: {
            title: "A. अनुमतियां जो हम मांगते हैं",
            content: "ABC Scan को बिजनेस कार्ड स्कैनर के रूप में कार्य करने के लिए, हमें आपके डिवाइस पर निम्नलिखित संवेदनशील अनुमतियों की आवश्यकता है:",
            list: {
                camera: "<strong>कैमरा:</strong> हम ऑप्टिकल कैरेक्टर रिकग्निशन (OCR) प्रोसेसिंग के लिए बिजनेस कार्ड की छवियों को कैप्चर करने के लिए आपके डिवाइस के कैमरे का उपयोग करते हैं।",
                gallery: "<strong>फोटो गैलरी (स्टोरेज/मीडिया):</strong> हम स्कैनिंग के लिए बिजनेस कार्ड की मौजूदा छवियों को अपलोड करने की अनुमति देने के लिए आपकी फोटो गैलरी तक पहुंच का अनुरोध करते हैं।",
                contacts: "<strong>संपर्क:</strong> हम केवल आपके अनुरोध पर स्कैन किए गए बिजनेस कार्ड विवरणों को सीधे आपके डिवाइस की मूल एड्रेस बुक में सहेजने के उद्देश्य से आपकी संपर्क सूची (पढ़ें/लिखें) तक पहुंच का अनुरोध करते हैं। हम किसी अन्य उद्देश्य के लिए आपकी संपर्क सूची को हमारे सर्वर पर अपलोड नहीं करते हैं।"
            }
        },

        section_1b: {
            title: "B. व्यक्तिगत डेटा",
            content: "जब आप Firebase प्रमाणीकरण के माध्यम से एक खाता पंजीकृत करते हैं, तो हम एकत्र कर सकते हैं:",
            list: {
                email: "ईमेल पता",
                name: "नाम",
                profile: "प्रोफ़ाइल चित्र (यदि सामाजिक लॉगिन के माध्यम से लागू हो)"
            }
        },

        section_1c: {
            title: "C. स्कैन किया गया डेटा",
            content: "आपके द्वारा स्कैन किए गए बिजनेस कार्ड डेटा (नाम, फोन नंबर, कंपनी के नाम आदि) को छवि को टेक्स्ट में बदलने के लिए संसाधित किया जाता है। यदि आप इस डेटा को क्लाउड में सहेजना चुनते हैं, तो इसे Google Firebase सेवाओं का उपयोग करके सुरक्षित रूप से संग्रहीत किया जाता है ताकि आप इसे सभी डिवाइसों में एक्सेस कर सकें।"
        },

        section_2: {
            title: "तृतीय-पक्ष सेवा प्रदाता",
            content: "ऐप तृतीय-पक्ष सेवाओं का उपयोग करता है जो आपकी पहचान करने के लिए उपयोग की जाने वाली जानकारी एकत्र कर सकते हैं। नीचे ऐप द्वारा उपयोग किए जाने वाले तृतीय-पक्ष सेवा प्रदाताओं की गोपनीयता नीतियों के लिंक दिए गए हैं:",
            list: {
                play_services: "<strong>Google Play Services</strong>",
                admob: "<strong>AdMob:</strong> हम विज्ञापन प्रदर्शित करने के लिए AdMob का उपयोग करते हैं। AdMob आपकी रुचियों के आधार पर वैयक्तिकृत विज्ञापन दिखाने के लिए कुकीज़ और अद्वितीय डिवाइस पहचानकर्ताओं (विज्ञापन आईडी) का उपयोग कर सकता है।",
                admob_link: "AdMob गोपनीयता नीति देखें",
                firebase: "<strong>Google Firebase:</strong> हम प्रमाणीकरण (लॉगिन), एनालिटिक्स और डेटाबेस स्टोरेज (आपके स्कैन किए गए कार्ड को सहेजने) के लिए Firebase का उपयोग करते हैं।",
                firebase_link: "Firebase गोपनीयता नीति देखें"
            }
        },

        section_3: {
            title: "लॉग डेटा",
            content: "हम आपको सूचित करना चाहते हैं कि जब भी आप हमारी सेवा का उपयोग करते हैं, ऐप में त्रुटि के मामले में, हम आपके फोन पर लॉग डेटा नामक डेटा और जानकारी (तृतीय-पक्ष उत्पादों के माध्यम से) एकत्र करते हैं। इस लॉग डेटा में आपके डिवाइस के इंटरनेट प्रोटोकॉल (\"IP\") पता, डिवाइस का नाम, ऑपरेटिंग सिस्टम संस्करण, हमारी सेवा का उपयोग करते समय ऐप का कॉन्फ़िगरेशन, आपकी सेवा के उपयोग का समय और तारीख और अन्य आंकड़े जैसी जानकारी शामिल हो सकती है।"
        },

        section_4: {
            title: "सुरक्षा",
            content: "हम हमें अपनी व्यक्तिगत जानकारी और अपना स्कैन किया गया डेटा प्रदान करने में आपके विश्वास को महत्व देते हैं। हम ट्रांसमिशन और स्टोरेज के दौरान आपके डेटा की सुरक्षा के लिए Google Firebase द्वारा प्रदान किए गए उद्योग-मानक सुरक्षा उपायों का उपयोग करते हैं। हालांकि, याद रखें कि इंटरनेट पर ट्रांसमिशन का कोई भी तरीका, या इलेक्ट्रॉनिक स्टोरेज का तरीका 100% सुरक्षित और विश्वसनीय नहीं है, और हम इसकी पूर्ण सुरक्षा की गारंटी नहीं दे सकते हैं।"
        },

        section_5: {
            title: "बच्चों की गोपनीयता",
            content: "ये सेवाएं 13 वर्ष से कम उम्र के किसी भी व्यक्ति को संबोधित नहीं करती हैं। हम जानबूझकर 13 वर्ष से कम उम्र के बच्चों से व्यक्तिगत रूप से पहचान योग्य जानकारी एकत्र नहीं करते हैं। यदि हमें पता चलता है कि 13 वर्ष से कम उम्र के बच्चे ने हमें व्यक्तिगत जानकारी प्रदान की है, तो हम इसे तुरंत अपने सर्वर से हटा देते हैं। यदि आप माता-पिता या अभिभावक हैं और आप जानते हैं कि आपके बच्चे ने हमें व्यक्तिगत जानकारी प्रदान की है, तो कृपया हमसे संपर्क करें ताकि हम आवश्यक कार्रवाई कर सकें।"
        },

        section_6: {
            title: "इस गोपनीयता नीति में परिवर्तन",
            content: "हम समय-समय पर अपनी गोपनीयता नीति को अपडेट कर सकते हैं। इस प्रकार, आपको किसी भी बदलाव के लिए समय-समय पर इस पृष्ठ की समीक्षा करने की सलाह दी जाती है। हम इस पृष्ठ पर नई गोपनीयता नीति पोस्ट करके आपको किसी भी बदलाव के बारे में सूचित करेंगे। ये परिवर्तन इस पृष्ठ पर पोस्ट किए जाने के तुरंत बाद प्रभावी होते हैं।"
        },

        section_7: {
            title: "संपर्क करें",
            content: "यदि आपके पास हमारी गोपनीयता नीति के बारे में कोई प्रश्न या सुझाव हैं, तो हमसे संपर्क करने में संकोच न करें।",
            company_label: "कंपनी",
            email_label: "ईमेल"
        }
    },
    ja: {
        last_updated: "最終更新日：2026年1月29日",
        intro_1: "ZenpleLife（「私たち」、「私たちの」）は、ABC Scan モバイルアプリケーション（「アプリ」）を運営しています。このページは、当社のサービスを使用する際の個人情報の収集、使用、開示に関する当社のポリシーと、そのデータに関連する選択肢についてお知らせするものです。",
        intro_2: "サービスを使用することにより、お客様はこのポリシーに従って情報の収集と使用に同意するものとします。",

        section_1: {
            title: "情報の収集と使用",
            content: "より良い体験を提供し、名刺スキャン機能の機能を確保するために、当社は特定の個人識別情報の提供をお客様に要求する場合があります。当社が要求する情報は、当社によって保持され、このプライバシーポリシーで説明されているように使用されます。"
        },

        section_1a: {
            title: "A. 当社が要求する権限",
            content: "ABC Scan が名刺スキャナーとして機能するために、デバイス上の次の機密性の高い権限が必要です：",
            list: {
                camera: "<strong>カメラ：</strong> 光学文字認識（OCR）処理のために名刺の画像をキャプチャするために、デバイスのカメラを使用します。",
                gallery: "<strong>フォトギャラリー（ストレージ/メディア）：</strong> スキャンのために名刺の既存の画像をアップロードできるように、フォトギャラリーへのアクセスを要求します。",
                contacts: "<strong>連絡先：</strong> お客様のリクエストに応じて、スキャンした名刺の詳細をデバイスのネイティブアドレス帳に直接保存する目的でのみ、連絡先リストへのアクセス（読み取り/書き込み）を要求します。その他の目的でお客様の連絡先リストを当社のサーバーにアップロードすることはありません。"
            }
        },

        section_1b: {
            title: "B. 個人データ",
            content: "Firebase Authentication を介してアカウントを登録する場合、以下を収集する場合があります：",
            list: {
                email: "メールアドレス",
                name: "名前",
                profile: "プロフィール写真（ソーシャルログインを介して該当する場合）"
            }
        },

        section_1c: {
            title: "C. スキャンデータ",
            content: "スキャンした名刺データ（名前、電話番号、会社名など）は、画像をテキストに変換するために処理されます。このデータをクラウドに保存することを選択した場合、Google Firebase サービスを使用して安全に保存されるため、デバイス間でアクセスできます。"
        },

        section_2: {
            title: "サードパーティのサービスプロバイダー",
            content: "アプリは、お客様を特定するために使用される情報を収集する可能性のあるサードパーティのサービスを使用しています。以下は、アプリが使用するサードパーティのサービスプロバイダーのプライバシーポリシーへのリンクです：",
            list: {
                play_services: "<strong>Google Play Services</strong>",
                admob: "<strong>AdMob：</strong> 広告を表示するために AdMob を使用しています。 AdMob は、クッキーと一意のデバイス識別子（広告 ID）を使用して、お客様の興味に基づいたパーソナライズされた広告を配信する場合があります。",
                admob_link: "AdMob プライバシーポリシーを表示",
                firebase: "<strong>Google Firebase：</strong> 認証（ログイン）、分析、データベースストレージ（スキャンしたカードの保存）に Firebase を使用しています。",
                firebase_link: "Firebase プライバシーポリシーを表示"
            }
        },

        section_3: {
            title: "ログデータ",
            content: "当社は、お客様が当社のサービスを使用するたびに、アプリでエラーが発生した場合、ログデータと呼ばれる携帯電話上のデータと情報（サードパーティ製品を通じて）を収集することをお知らせします。このログデータには、デバイスのインターネットプロトコル（「IP」）アドレス、デバイス名、オペレーティングシステムのバージョン、当社のサービスを利用する際のアプリの構成、サービスの利用日時、およびその他の統計などの情報が含まれる場合があります。"
        },

        section_4: {
            title: "セキュリティ",
            content: "個人情報とスキャンデータを提供してくださるお客様の信頼を大切にしています。当社は、送信および保存中にお客様のデータを保護するために、Google Firebase が提供する業界標準のセキュリティ対策を利用しています。ただし、インターネットを介した送信方法や電子ストレージの方法は 100% 安全で信頼できるものではなく、絶対的なセキュリティを保証することはできないことを覚えておいてください。"
        },

        section_5: {
            title: "子供のプライバシー",
            content: "これらのサービスは、13歳未満の子供を対象としていません。当社は、13歳未満の子供から故意に個人識別情報を収集することはありません。13歳未満の子供が個人情報を提供したことが判明した場合、直ちにサーバーから削除します。親または保護者であり、子供が私たちに個人情報を提供したことに気付いている場合は、必要な措置を講じることができるようにご連絡ください。"
        },

        section_6: {
            title: "このプライバシーポリシーの変更",
            content: "プライバシーポリシーを随時更新する場合があります。したがって、変更がないか定期的にこのページを確認することをお勧めします。このページに新しいプライバシーポリシーを掲載することにより、変更を通知します。これらの変更は、このページに掲載された直後に有効になります。"
        },

        section_7: {
            title: "お問い合わせ",
            content: "当社のプライバシーポリシーについてご質問やご提案がございましたら、お気軽にお問い合わせください。",
            company_label: "会社",
            email_label: "メール"
        }
    },
    ko: {
        last_updated: "최종 업데이트: 2026년 1월 29일",
        intro_1: "ZenpleLife(\"우리\")는 ABC Scan 모바일 애플리케이션(\"앱\")을 운영합니다. 이 페이지는 귀하가 당사의 서비스를 사용할 때 개인 정보의 수집, 사용 및 공개에 대한 당사의 정책과 해당 데이터와 관련하여 귀하가 선택할 수 있는 사항을 알립니다.",
        intro_2: "서비스를 사용함으로써 귀하는 이 정책에 따라 정보를 수집하고 사용하는 데 동의합니다.",

        section_1: {
            title: "정보 수집 및 사용",
            content: "더 나은 경험을 제공하고 명함 스캔 기능의 기능을 보장하기 위해 당사는 특정 개인 식별 정보를 제공하도록 요구할 수 있습니다. 당사가 요청하는 정보는 당사가 보유하며 본 개인 정보 보호 정책에 설명된 대로 사용됩니다."
        },

        section_1a: {
            title: "A. 요청하는 권한",
            content: "ABC Scan이 명함 스캐너로 작동하려면 기기에서 다음의 민감한 권한이 필요합니다:",
            list: {
                camera: "<strong>카메라:</strong> 광학 문자 인식(OCR) 처리를 위해 명함 이미지를 캡처하는 데 기기의 카메라를 사용합니다.",
                gallery: "<strong>사진 갤러리(저장소/미디어):</strong> 스캔할 명함의 기존 이미지를 업로드할 수 있도록 사진 갤러리에 대한 액세스를 요청합니다.",
                contacts: "<strong>연락처:</strong> 당사는 귀하의 요청에 따라 스캔한 명함 세부 정보를 기기의 기본 주소록에 직접 저장할 목적으로만 귀하의 연락처 목록(읽기/쓰기)에 대한 액세스를 요청합니다. 당사는 다른 목적으로 귀하의 연락처 목록을 당사 서버에 업로드하지 않습니다."
            }
        },

        section_1b: {
            title: "B. 개인 데이터",
            content: "Firebase Authentication을 통해 계정을 등록할 때 다음을 수집할 수 있습니다:",
            list: {
                email: "이메일 주소",
                name: "이름",
                profile: "프로필 사진(소셜 로그인을 통해 해당되는 경우)"
            }
        },

        section_1c: {
            title: "C. 스캔한 데이터",
            content: "스캔한 명함 데이터(이름, 전화번호, 회사 이름 등)는 이미지를 텍스트로 변환하기 위해 처리됩니다. 이 데이터를 클라우드에 저장하기로 선택한 경우 Google Firebase 서비스를 사용하여 안전하게 저장되므로 기기 간에 액세스할 수 있습니다."
        },

        section_2: {
            title: "타사 서비스 제공업체",
            content: "이 앱은 귀하를 식별하는 데 사용되는 정보를 수집할 수 있는 타사 서비스를 사용합니다. 다음은 앱에서 사용하는 타사 서비스 제공업체의 개인 정보 보호 정책에 대한 링크입니다:",
            list: {
                play_services: "<strong>Google Play Services</strong>",
                admob: "<strong>AdMob:</strong> 광고를 표시하기 위해 AdMob을 사용합니다. AdMob은 쿠키 및 고유한 기기 식별자(광고 ID)를 사용하여 귀하의 관심사를 기반으로 맞춤형 광고를 게재할 수 있습니다.",
                admob_link: "AdMob 개인 정보 보호 정책 보기",
                firebase: "<strong>Google Firebase:</strong> 인증(로그인), 분석 및 데이터베이스 저장소(스캔한 명함 저장)에 Firebase를 사용합니다.",
                firebase_link: "Firebase 개인 정보 보호 정책 보기"
            }
        },

        section_3: {
            title: "로그 데이터",
            content: "당사는 귀하가 당사 서비스를 사용할 때마다 앱에 오류가 발생할 경우 로그 데이터라는 귀하의 휴대폰에 있는 데이터 및 정보(타사 제품을 통해)를 수집함을 알려드립니다. 이 로그 데이터에는 귀하의 기기 인터넷 프로토콜(\"IP\") 주소, 기기 이름, 운영 체제 버전, 당사 서비스 이용 시 앱 구성, 서비스 이용 시간 및 날짜, 기타 통계와 같은 정보가 포함될 수 있습니다."
        },

        section_4: {
            title: "보안",
            content: "당사는 귀하가 귀하의 개인 정보와 스캔한 데이터를 당사에 제공하는 것에 대한 귀하의 신뢰를 소중히 여깁니다. 당사는 전송 및 저장 중에 데이터를 보호하기 위해 Google Firebase에서 제공하는 업계 표준 보안 조치를 사용합니다. 그러나 인터넷을 통한 전송 방법이나 전자 저장 방법은 100% 안전하고 신뢰할 수 없으며 절대적인 보안을 보장할 수 없음을 기억하십시오."
        },

        section_5: {
            title: "아동의 개인 정보 보호",
            content: "이 서비스는 13세 미만의 어린이를 대상으로 하지 않습니다. 당사는 13세 미만의 어린이로부터 고의로 개인 식별 정보를 수집하지 않습니다. 13세 미만의 어린이가 당사에 개인 정보를 제공했다는 사실을 알게 되면 당사는 즉시 서버에서 해당 정보를 삭제합니다. 부모 또는 보호자이고 자녀가 당사에 개인 정보를 제공했다는 사실을 알고 있는 경우 당사에 연락하여 필요한 조치를 취할 수 있도록 하십시오."
        },

        section_6: {
            title: "본 개인 정보 보호 정책의 변경",
            content: "당사는 개인 정보 보호 정책을 수시로 업데이트할 수 있습니다. 따라서 변경 사항이 있는지 이 페이지를 주기적으로 검토하는 것이 좋습니다. 당사는 이 페이지에 새로운 개인 정보 보호 정책을 게시하여 변경 사항을 알립니다. 이러한 변경 사항은 이 페이지에 게시되는 즉시 유효합니다."
        },

        section_7: {
            title: "문의하기",
            content: "당사의 개인 정보 보호 정책에 대해 질문이나 제안 사항이 있으시면 언제든지 문의하십시오.",
            company_label: "회사",
            email_label: "이메일"
        }
    },
    pt: {
        last_updated: "Última atualização: 29 de janeiro de 2026",
        intro_1: "ZenpleLife (\"nós\", \"nosso\" ou \"nos\") opera o aplicativo móvel ABC Scan (o \"Aplicativo\"). Esta página informa sobre nossas políticas em relação à coleta, uso e divulgação de Informações Pessoais quando você usa nosso Serviço e as escolhas que você tem associadas a esses dados.",
        intro_2: "Ao usar o Serviço, você concorda com a coleta e uso de informações de acordo com esta política.",

        section_1: {
            title: "Coleta e Uso de Informações",
            content: "Para fornecer uma melhor experiência e garantir a funcionalidade de nossos recursos de digitalização de cartões de visita, podemos exigir que você nos forneça certas informações de identificação pessoal. As informações que solicitamos serão retidas por nós e usadas conforme descrito nesta política de privacidade."
        },

        section_1a: {
            title: "A. Permissões que Solicitamos",
            content: "Para que o ABC Scan funcione como um digitalizador de cartões de visita, exigimos as seguintes permissões sensíveis no seu dispositivo:",
            list: {
                camera: "<strong>Câmera:</strong> Usamos a câmera do seu dispositivo para capturar imagens de cartões de visita para processamento de Reconhecimento Óptico de Caracteres (OCR).",
                gallery: "<strong>Galeria de Fotos (Armazenamento/Mídia):</strong> Solicitamos acesso à sua galeria de fotos para permitir que você carregue imagens existentes de cartões de visita para digitalização.",
                contacts: "<strong>Contatos:</strong> Solicitamos acesso à sua lista de contatos (Leitura/Gravação) apenas com a finalidade de salvar os detalhes do cartão de visita digitalizado diretamente no catálogo de endereços nativo do seu dispositivo, mediante sua solicitação. Não enviamos sua lista de contatos para nossos servidores para nenhuma outra finalidade."
            }
        },

        section_1b: {
            title: "B. Dados Pessoais",
            content: "Ao registrar uma conta via Autenticação do Firebase, podemos coletar:",
            list: {
                email: "Endereço de e-mail",
                name: "Nome",
                profile: "Foto de perfil (se aplicável via login social)"
            }
        },

        section_1c: {
            title: "C. Dados Digitalizados",
            content: "Os dados do cartão de visita que você digitaliza (nomes, números de telefone, nomes de empresas, etc.) são processados para converter a imagem em texto. Se você optar por salvar esses dados na nuvem, eles serão armazenados com segurança usando os serviços do Google Firebase para que você possa acessá-los em todos os seus dispositivos."
        },

        section_2: {
            title: "Provedores de Serviços Terceirizados",
            content: "O Aplicativo usa serviços de terceiros que podem coletar informações usadas para identificá-lo. Abaixo estão os links para as políticas de privacidade dos provedores de serviços terceirizados usados pelo Aplicativo:",
            list: {
                play_services: "<strong>Google Play Services</strong>",
                admob: "<strong>AdMob:</strong> Usamos a AdMob para exibir anúncios. A AdMob pode usar cookies e identificadores de dispositivo exclusivos (ID de publicidade) para veicular anúncios personalizados com base em seus interesses.",
                admob_link: "Ver Política de Privacidade da AdMob",
                firebase: "<strong>Google Firebase:</strong> Usamos o Firebase para autenticação (login), análise e armazenamento de banco de dados (salvar seus cartões digitalizados).",
                firebase_link: "Ver Política de Privacidade do Firebase"
            }
        },

        section_3: {
            title: "Dados de Log",
            content: "Queremos informar que sempre que você usar nosso Serviço, em caso de erro no Aplicativo, coletamos dados e informações (por meio de produtos de terceiros) em seu telefone chamados Dados de Log. Esses Dados de Log podem incluir informações como o endereço de Protocolo de Internet (\"IP\") do seu dispositivo, nome do dispositivo, versão do sistema operacional, a configuração do aplicativo ao utilizar nosso Serviço, a hora e a data do seu uso do Serviço e outras estatísticas."
        },

        section_4: {
            title: "Segurança",
            content: "Valorizamos sua confiança em nos fornecer suas Informações Pessoais e seus dados digitalizados. Utilizamos medidas de segurança padrão do setor fornecidas pelo Google Firebase para proteger seus dados durante a transmissão e o armazenamento. No entanto, lembre-se de que nenhum método de transmissão pela internet ou método de armazenamento eletrônico é 100% seguro e confiável, e não podemos garantir sua segurança absoluta."
        },

        section_5: {
            title: "Privacidade das Crianças",
            content: "Esses Serviços não se dirigem a ninguém com menos de 13 anos. Não coletamos intencionalmente informações de identificação pessoal de crianças menores de 13 anos. Caso descubramos que uma criança menor de 13 anos nos forneceu informações pessoais, excluímos isso imediatamente de nossos servidores. Se você é pai ou responsável e sabe que seu filho nos forneceu informações pessoais, entre em contato conosco para que possamos realizar as ações necessárias."
        },

        section_6: {
            title: "Alterações nesta Política de Privacidade",
            content: "Podemos atualizar nossa Política de Privacidade de tempos em tempos. Portanto, é aconselhável revisar esta página periodicamente para verificar se há alterações. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página. Essas alterações entram em vigor imediatamente após serem publicadas nesta página."
        },

        section_7: {
            title: "Contate-Nos",
            content: "Se você tiver alguma dúvida ou sugestão sobre nossa Política de Privacidade, não hesite em nos contatar.",
            company_label: "Empresa",
            email_label: "E-mail"
        }
    }
};

// Merge into global translations object
if (typeof translations !== 'undefined') {
    Object.keys(privacyContent).forEach(lang => {
        if (translations[lang]) {
            translations[lang].privacy_content = privacyContent[lang];
        } else {
            // If the language doesn't exist in the main file yet, we can add it or ignore it.
            // For now, we assume main translations object has all keys.
            translations[lang] = { privacy_content: privacyContent[lang] };
        }
    });
}
