# 🎄 Jeorjie Voucher Website

A fun, interactive Christmas-themed voucher redemption website with animations, music, and confetti!

## 📁 Project Structure

```
jeorjie-voucher/
├── pages/
│   ├── index.html      # Landing page with gift icon
│   ├── form.html       # Voucher form page
│   └── success.html    # Success/confirmation page
├── css/
│   └── style.css       # All styles and animations
├── js/
│   ├── landing.js      # Landing page interactions
│   ├── script.js       # Form submission handling
│   ├── snow.js         # Falling snow animation
│   ├── music.js        # Music player controls
│   └── success.js      # Success page logic
└── assets/
    ├── jingle-bell-rock.mp3  # Background music
    ├── your-gif.gif          # Profile GIF
    └── your-photo.jpg        # Profile photo
```

## 🚀 Features

- **Interactive Landing Page**: Shaking gift icon that triggers confetti
- **Background Music**: Continuous Christmas music with play/pause toggle
- **Falling Snow Animation**: Continuous snow effect on all pages
- **Form Validation**: Date picker restricted to December 25th and later
- **Google Calendar Integration**: Automatic calendar invite creation
- **Smooth Page Transitions**: Music continues seamlessly between pages
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Setup

1. Clone or download this repository
2. Make sure all files are in the correct folder structure
3. For best results, use a local server:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000/pages/index.html`
   
   Or simply: `http://localhost:8000/pages/`

## 📝 Notes

- The form uses Netlify form handling (data-netlify="true")
- Music playback requires user interaction (clicking the gift)
- Calendar invite includes jeorjie24@gmail.com as an attendee
- All paths are relative, so the folder structure must be maintained

## 🎨 Customization

- Replace `assets/your-gif.gif` with your own GIF
- Replace `assets/jingle-bell-rock.mp3` with your own music file
- Update email in `js/success.js` (line 46) for calendar invites
- Modify colors and styles in `css/style.css`

## 📄 License

This project is for personal use.

