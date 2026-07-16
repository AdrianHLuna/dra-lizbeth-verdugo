import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google Tag Manager (GTM-N7NWM22N) */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N7NWM22N');`,
        }}
      />

      {/* Google Ads (AW-18328333814) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18328333814"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18328333814');
        `}
      </Script>

      {/* Google Analytics (G-2RGFS6YL97) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2RGFS6YL97"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2RGFS6YL97');
        `}
      </Script>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N7NWM22N"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}

