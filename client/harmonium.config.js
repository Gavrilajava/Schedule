module.exports = {
  "platforms": {
    "scss": {
      "buildPath": "./harmonium-settings/"
    },
    "js": {
      "buildPath": "./js/"
    }
  },
  "designTokens": {
    "blur": {
      "enabled": {
        "value": "blur(8px)"
      },
      "disabled": {
        "value": "blur(0)"
      }
    },
    "border": {
      "radius": {
        "small": {
          "value": "3px"
        },
        "rounded": {
          "value": "100000px"
        }
      }
    },
    "color": {
      "white": {
        "value": "#FFF"
      },
      "lightest-gray": {
        "value": "#F4F4F4"
      },
      "lighter-gray": {
        "value": "#D5D5D5"
      },
      "light-gray": {
        "value": "#ABABAB"
      },
      "gray": {
        "value": "#818181"
      },
      "dark-gray": {
        "value": "#565656"
      },
      "darker-gray": {
        "value": "#2A2A2A"
      },
      "black": {
        "value": "#000"
      },
      "white-0": {
        "value": "rgba(255, 255, 255, 0)",
        "comment": "For animation purposes"
      },
      "white-03": {
        "value": "rgba(255, 255, 255, 0.03)"
      },
      "white-06": {
        "value": "rgba(255, 255, 255, 0.06)"
      },
      "white-10": {
        "value": "rgba(255, 255, 255, 0.1)"
      },
      "white-20": {
        "value": "rgba(255, 255, 255, 0.2)"
      },
      "white-30": {
        "value": "rgba(255, 255, 255, 0.3)"
      },
      "white-40": {
        "value": "rgba(255, 255, 255, 0.4)"
      },
      "white-50": {
        "value": "rgba(255, 255, 255, 0.5)"
      },
      "white-60": {
        "value": "rgba(255, 255, 255, 0.6)"
      },
      "white-70": {
        "value": "rgba(255, 255, 255, 0.7)"
      },
      "white-80": {
        "value": "rgba(255, 255, 255, 0.8)"
      },
      "white-90": {
        "value": "rgba(255, 255, 255, 0.9)"
      },
      "black-0": {
        "value": "rgba(0,0,0, 0)",
        "comment": "For animation purposes"
      },
      "black-03": {
        "value": "rgba(0,0,0, 0.03)"
      },
      "black-06": {
        "value": "rgba(0,0,0, 0.06)"
      },
      "black-10": {
        "value": "rgba(0,0,0, 0.1)"
      },
      "black-20": {
        "value": "rgba(0,0,0, 0.2)"
      },
      "black-30": {
        "value": "rgba(0,0,0, 0.3)"
      },
      "black-40": {
        "value": "rgba(0,0,0, 0.4)"
      },
      "black-50": {
        "value": "rgba(0,0,0, 0.5)"
      },
      "black-60": {
        "value": "rgba(0,0,0, 0.6)"
      },
      "black-70": {
        "value": "rgba(0,0,0, 0.7)"
      },
      "black-80": {
        "value": "rgba(0,0,0, 0.8)"
      },
      "black-90": {
        "value": "rgba(0,0,0, 0.9)"
      },
      "divider": {
        "value": "{color.black-10.value}"
      },
      "divider-dark": {
        "value": "{color.black-20.value}"
      },
      "divider-light": {
        "value": "{color.white-10.value}"
      },
      "muted": {
        "value": "{color.lighter-gray.value}"
      },
      "very-muted": {
        "value": "{color.lightest-gray.value}"
      },
      "disabled": {
        "value": "{color.light-gray.value}"
      },
      "brand": {
        "primary": {
          "value": "#295DE5"
        },
        "secondary": {
          "value": "#6422EB"
        },
        "tertiary": {
          "value": "501BBC"
        }
      },
      "ui": {
        "primary": {
          "value": "{color.brand.primary.value}"
        },
        "success": {
          "value": "#00A67F"
        },
        "alert": {
          "value": "#D94011"
        },
        "warning": {
          "value": "#D10034"
        },
        "error": {
          "value": "#D10034"
        }
      }
    },
    "font": {
      "family": {
        "monospace": {
          "value": "'Montserrat', sans-serif"
        },
        "serif": {
          "value": "'Georgia', serif"
        },
        "sans-serif": {
          "value": "'Roboto', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif"
        }
      },
      "size": {
        "tiny": {
          "value": "1rem",
          "comment": "the smallest size of the font"
        },
        "smaller": {
          "value": "1.2rem",
          "comment": "a smaller font size"
        },
        "small": {
          "value": "1.4rem",
          "comment": "the small size of the font"
        },
        "medium": {
          "value": "2rem",
          "comment": "the medium size of the font"
        },
        "large": {
          "value": "2.4rem",
          "comment": "the large size of the font"
        },
        "larger": {
          "value": "3.6rem",
          "comment": "a larger font size"
        },
        "largest": {
          "value": "4.2rem",
          "comment": "the largest size of the font"
        },
        "base": {
          "value": "1.6rem",
          "comment": "the base size of the font"
        }
      },
      "weight": {
        "light": {
          "value": "300"
        },
        "normal": {
          "value": "400"
        },
        "bold": {
          "value": "700"
        }
      }
    },
    "grid": {
      "row": {
        "width": {
          "value": "{screen.width.full.value}"
        }
      },
      "column": {
        "padding": {
          "value": "{spacing.small.value}"
        }
      },
      "gutter": {
        "value": "{spacing.small.value} * 2"
      },
      "columns": {
        "value": "12"
      }
    },
    "icon": {
      "size": {
        "tiny": {
          "value": "8px"
        },
        "small": {
          "value": "16px"
        },
        "medium": {
          "value": "24px"
        },
        "large": {
          "value": "48px"
        },
        "larger": {
          "value": "64px"
        },
        "largest": {
          "value": "128px"
        },
        "base": {
          "value": "{icon.size.medium.value}"
        }
      }
    },
    "line-height": {
      "global": {
        "value": "1.5"
      },
      "base": {
        "value": "2.4rem"
      },
      "header": {
        "value": "1.1"
      }
    },
    "opacity": {
      "disabled": {
        "value": "0.35"
      }
    },
    "screen": {
      "width": {
        "full": {
          "value": "100%"
        },
        "small": {
          "value": "0"
        },
        "medium": {
          "value": "768px"
        },
        "large": {
          "value": "1024px"
        },
        "xlarge": {
          "value": "1200px"
        },
        "xxlarge": {
          "value": "1440px"
        },
        "nav": {
          "value": "{screen.width.medium.value}"
        }
      }
    },
    "box": {
      "shadow": {
        "default": {
          "value": "0 1px 4px 0 {color.black-30.value}"
        },
        "hover": {
          "value": "0 2px 6px 0 {color.black-50.value}"
        },
        "active": {
          "value": "0 1px 2px 0 {color.black-30.value}"
        }
      }
    },
    "spacing": {
      "tiny": {
        "value": "6px"
      },
      "small": {
        "value": "12px"
      },
      "medium": {
        "value": "24px"
      },
      "large": {
        "value": "48px"
      },
      "larger": {
        "value": "72px"
      },
      "base": {
        "value": "{spacing.medium.value}"
      }
    },
    "z-index": {
      "above-everything": {
        "value": "1000"
      },
      "above-most": {
        "value": "10"
      },
      "above": {
        "value": "1"
      },
      "default": {
        "value": "0"
      },
      "below": {
        "value": "-1"
      },
      "below-most": {
        "value": "-10"
      },
      "below-everything": {
        "value": "-1000"
      }
    }
  }
}