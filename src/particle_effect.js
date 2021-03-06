tsParticles.load('logo-stars', {
  detectRetina: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'window',
    events: {
      onHover: {
        enable: true,
        mode: 'bubble'
      },
      resize: true
    },
    modes: {
      bubble: {
        color: ['#f9a602', 'e6bb67'], //bg color: "#303b53",
        distance: 64,
        duration: 2,
        opacity: 1,
        size: 5,
        speed: 2.4
      }
    }
  },
  particles: {
    color: {
      value: ['#e6bb67', '#e6bb67', '#f6dcb2', '#f6dcb2', '#f6dcb2', 'f6dcb2', '#fff']
    },
    links: {
      blink: false,
      color: ['#e6bb67', '#e6bb67', 'f6dcb2'],
      consent: false,
      distance: 13,
      enable: true,
      opacity: 1,
      width: 1
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      bounce: false,
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 0.2,
      straight: false
    },
    number: {
      density: {
        enable: false,
        area: 20000
      },
      limit: 0,
      value: 175
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.05,
        speed: 4,
        sync: false
      },
      random: false,
      value: 1
    },
    shape: {
      type: ['square', 'circle', 'circle', 'circle', 'triangle']
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false
      },
      random: true,
      value: 2.4
    }
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: '#fff',
      lineWidth: 0.2
    },
    move: {
      radius: 3
    },
    inlineArrangement: 'equidistant',
    scale: 0.6,
    type: 'inline',
    data: {
      path:
        'M1259.83 782.15h-18.44a7.3 7.3 0 00-6.38 4.44l-77.7 209.65-78-209.64a7.32 7.32 0 00-6.39-4.44h-18.44a3.07 3.07 0 00-3.09 4.44l91.19 245.18a6 6 0 00.93 1.6l-9.83 26.53-101.27-273.3a7.3 7.3 0 00-6.38-4.44h-18.44a3.08 3.08 0 00-3.09 4.44l114.16 308a6.59 6.59 0 001.92 2.63 3.1 3.1 0 003.24 2.13h18.44a6.13 6.13 0 002.11-.41 3.18 3.18 0 001.64-.85 6.91 6.91 0 002.63-3.19l114.28-308.32a3.08 3.08 0 00-3.09-4.45zM1354.93 782.15h-18.44a7.3 7.3 0 00-6.38 4.44L1215.83 1095a3.08 3.08 0 003.09 4.44h18.44a7.31 7.31 0 006.38-4.44L1358 786.6a3.08 3.08 0 00-3.07-4.45zM1240.89 960.6h-18.44a7.3 7.3 0 00-6.38 4.44L1167.92 1095a3.07 3.07 0 003.06 4.44h18.51a7.31 7.31 0 006.3-4.33L1244 965a3.07 3.07 0 00-3.11-4.4zM1229.63 940.83h18.44a7.3 7.3 0 006.38-4.44L1310 786.48c.77-2.07-.11-3.8-2-4.29a3.89 3.89 0 00-.42 0H1288a5.22 5.22 0 00-1.5.25 7.78 7.78 0 00-3.3 2.28 5.24 5.24 0 00-.78 1.37l-56.1 151.37c-.25 1.91 1.07 3.37 3.31 3.37z',
      size: {
        width: 2360,
        height: 2260
      }
    }
  }
});

tsParticles.load('background-stars', {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: ['star', 'circle', 'circle', 'circle', 'star'],
      stroke: {
        width: 0,
        color: '#000000'
      }
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 12.0,
        opacity_min: 0.6,
        sync: false
      }
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 0.3,
        size_min: 1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 45,
      color: '#ffffff',
      opacity: 0.7,
      width: 1.2
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: 'top',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: true,
        rotateX: 2000,
        rotateY: 2000
      }
    }
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onDiv: [
        {
          enable: true,
          selectors: '.titlespace',
          mode: 'bounce',
          type: 'rectangle'
        }
      ],
      resize: true,
      onhover: {
        enable: true,
        mode: ['bubble', 'trail'],
        parallax: {
          enable: true,
          force: 100,
          smooth: 6
        }
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        color: '#e6bb67', //bg color: "#303b53",
        distance: 100,
        size: 4.8,
        duration: 2,
        opacity: 0.9,
        speed: 2.4
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 1
      },
      trail: {
        delay: 1.5,
        quantity: 1
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  pauseOnOutsideViewport: true
});
