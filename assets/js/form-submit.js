!(function (e) {
  "use strict";
  document.querySelectorAll(".phone").forEach((e) => {
    e.addEventListener("input", function (e) {
      var t = e.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = t[2]
        ? "(" + t[1] + ") " + t[2] + (t[3] ? "-" + t[3] : "")
        : t[1];
    });
  }),
    document.querySelectorAll(".main-contact-form").forEach((t) => {
      t.addEventListener("submit", function (o) {
        o.preventDefault();
        const a = window?.location?.href,
          n = new FormData(t),
          c = new URLSearchParams(new URL(a).search);
        var r = { websource: "New MVA Landing page", URL: a };
        c.forEach((e, t) => {
          r[t] = e;
        }),
          n.forEach((e, t) => {
            r[t] = e;
          }),
          fetch("https://hooks.zapier.com/hooks/catch/2375177/2arxgem/", {
            method: "POST",
            body: JSON.stringify(r),
          })
            .then((e) => e.text())
            .then((o) => {
              t.reset(),
                //e("#successModal").modal("show"),
                window.location.href="https://wrongfulterminationlawyersca.com/thank-you-lp/";
                r?.fullName && e("#clientName").html(` ${r.fullName}!`),
                (window.optimizely = window.optimizely || []),
                window.optimizely?.push({
                  type: "event",
                  eventName: "form_completion",
                  tags: { revenue: 0, value: 0 },
                });
            })
            .catch((e) => {});
      });
    });
})(window.jQuery);
