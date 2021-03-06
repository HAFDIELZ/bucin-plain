const variables = {
  greetings: {
    morning: "Good Morning semangat beraktifitasss",
    day: "Dah siang nih jgn telat makan yaa",
    afternoon: "Good Afternoon",
    evening: "Selamat Malam...:3",
    night: "Waktunya istirahat jgn begadang yaa kesehatanmu dijaga",
  },
  quotes: [
    { quote: "I'm sorry for loving you.", author: "Abdiel" },
    { quote: "Take care okaaayyy.", author: "Diel" },
    { quote: "Aku sayang kamu!", author: "Dieleleleleee" },
    { quote: "Ora koe ora wae ♥", author: "Dildil!" },
    { quote: "i`m glad we meet", author: "Doelll" },
    { quote: "Ada nama mu dalam setiap doa ku", author: "Calon Imam mu" },
    { quote: "Mereka yang selalu meminta pengertian, Terkadang lupa memberikan hal yang sama", author: "Hafiz" },
    { quote: "Negatif corona Positif mencintaimu", author: "Bedil" },
    { quote: "Siapa suruh cantik, Jadinya aku suka kan", author: "Hafyz" },
  ],
  nicknames: ["Sayang", "Babe", "Cintaku", "Sweetheart"],
  generated: ["{greetings}, {nicknames}!"],
};

const particlesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 8000,
      },
    },
    color: {
      value: "#000",
    },
    shape: {
      type: "image",
      stroke: {
        width: 2,
        color: "#FF1493",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "./assets/heart-red.png",
        width: 50,
        height: 50,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        size_min: 0.5,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 80,
      color: "FF1493",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "right",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 0.3,
        },
      },
      bubble: {
        distance: 800,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 2,
      },
      remove: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};
