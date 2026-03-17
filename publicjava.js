const ONESIGNAL_APP_ID = "2282f493-01c5-4d23-9cd6-d551b43692d0";

window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: ONESIGNAL_APP_ID,
    notifyButton: {
      enable: true, // Affiche la petite cloche
    },
  });
});

// Ton code pour récupérer les données Supabase reste en dessous...