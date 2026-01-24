# Security Headers for Static Export

Since this project uses `output: 'export'`, the Next.js middleware won't run in production. You'll need to configure these headers at your hosting provider level.

## Netlify

Create `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; media-src 'none'; object-src 'none'; frame-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"
    Permissions-Policy = "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), display-capture=(), clipboard-write=(self)"
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-DNS-Prefetch-Control = "on"
    Referrer-Policy = "strict-origin-when-cross-origin"
    X-XSS-Protection = "1; mode=block"
    Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"
```

## Vercel

Create `vercel.json`:

```json
{
    "headers": [
        {
            "source": "/(.*)",
            "headers": [
                {
                    "key": "Content-Security-Policy",
                    "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; media-src 'none'; object-src 'none'; frame-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"
                },
                {
                    "key": "Permissions-Policy",
                    "value": "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), display-capture=(), clipboard-write=(self)"
                },
                {
                    "key": "X-Frame-Options",
                    "value": "DENY"
                },
                {
                    "key": "X-Content-Type-Options",
                    "value": "nosniff"
                },
                {
                    "key": "X-DNS-Prefetch-Control",
                    "value": "on"
                },
                {
                    "key": "Referrer-Policy",
                    "value": "strict-origin-when-cross-origin"
                },
                {
                    "key": "X-XSS-Protection",
                    "value": "1; mode=block"
                },
                {
                    "key": "Strict-Transport-Security",
                    "value": "max-age=63072000; includeSubDomains; preload"
                }
            ]
        }
    ]
}
```

## Cloudflare Pages

Create `_headers`:

```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; media-src 'none'; object-src 'none'; frame-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), display-capture=(), clipboard-write=(self)
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-DNS-Prefetch-Control: on
  Referrer-Policy: strict-origin-when-cross-origin
  X-XSS-Protection: 1; mode=block
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## GitHub Pages (Apache)

Create `.htaccess`:

```apache
<IfModule mod_headers.c>
  Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; media-src 'none'; object-src 'none'; frame-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"
  Header set Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), display-capture=(), clipboard-write=(self)"
  Header set X-Frame-Options "DENY"
  Header set X-Content-Type-Options "nosniff"
  Header set X-DNS-Prefetch-Control "on"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set X-XSS-Protection "1; mode=block"
  Header set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
</IfModule>
```

## Notes

- **`unsafe-inline`** is currently required for:
    - Theme initialization script (blocks FOUC)
    - Tailwind CSS inline styles

    Consider implementing nonce-based CSP for stricter security in production.

- **HSTS** (Strict-Transport-Security) should only be enabled when using HTTPS.

- Test your headers after deployment using tools like:
    - [securityheaders.com](https://securityheaders.com)
    - [Mozilla Observatory](https://observatory.mozilla.org)
