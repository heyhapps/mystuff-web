/**
 * Everything the site says and links to, in one place.
 * Edit this file to change the site; the components only render it.
 */
import type { IconName } from './components/Icon'

export const site = {
  appName: 'MyStuff',
  brand: 'heyhapps',
  email: 'hello.heyhapps@gmail.com',

  links: {
    /** The GitHub Releases page; "latest" always points at the newest APK. */
    download: 'https://github.com/ravvo-717/mystuff/releases/latest',
    itch: 'https://ravvo-717.itch.io/mystuff',
    github: 'https://github.com/ravvo-717/mystuff',
  },

  hero: {
    headline: 'All your stuff\nSafe in your pocket',
    /** The one word in the headline drawn in the brand gradient. */
    highlight: 'pocket',
    /** Small badge above the headline, with a green dot. Empty string hides it. */
    badge: 'Beta is live',
    sub: 'A private vault for passwords, notes, cards, IDs and documents. Free, with no ads and no tracking.',
    primary: 'Download for Android',
    secondary: 'Get it on itch.io',
    /** Shorter labels for the side-by-side buttons on phones. */
    primaryShort: 'Download',
    secondaryShort: 'Get on itch.io',
    note: 'Free · optional Google Drive backup',
    notePhone: 'Free for Android 7 or newer',
    /** App screens rebuilt in public/screens/<name>.html, left to right. */
    screens: [
      { screen: 'unlock', alt: 'MyStuff unlock screen with PIN pad and fingerprint' },
      { screen: 'home', alt: 'MyStuff Home with Passwords, Notes, Cards, Identities and Documents' },
      { screen: 'item', alt: 'A saved password in MyStuff' },
    ],
  },

  learn: {
    safetyTitle: 'Private by design',
    safetySub: 'Here is what happens when you save a password.',
    /** The three-step "where your data goes" diagram. */
    journey: {
      phone: {
        tag: 'On your phone',
        title: 'You save it',
        sample: { label: 'Netflix · Password', lines: ['you@gmail.com', 'sunflower-42'] },
        line: 'On your phone, it opens only with your PIN or fingerprint.',
      },
      encrypt: {
        tag: 'Before it is saved',
        title: 'Locked with AES-256',
        /** Illustration only: what a stored item looks like to anyone without your PIN. */
        cipher: 'A6SNuiVwwiro0PXtsDrd7zHg7spk66XV1VJTbS7ju4DRjgaM6DXWq7gKZSXbVin06d3oohgs==',
        line: 'Anyone who copies the file off your phone sees only this.',
      },
      backup: {
        tag: 'Backup',
        title: 'Your Google Drive',
        file: 'mystuff_vault.msb',
        fileNote: 'Encrypted. Opens only with your PIN',
        none: 'No heyhapps servers.',
      },
    },
    safetyMore: [
      { icon: 'screenshot', text: 'No screenshots or screen recording.' },
      { icon: 'eyeOff', text: 'No ads, no tracking, no sign-up.' },
    ] satisfies { icon: IconName; text: string }[],
    keepTitle: 'What you can keep',
    keepSub: 'Everything sits on your Home screen.',
    /** Colours match the app's categories (VaultItemTypeUi.color). */
    keep: [
      { icon: 'lock', color: '#2563eb', name: 'Passwords', line: 'Logins you copy with one tap.' },
      { icon: 'note', color: '#6366f1', name: 'Notes', line: 'Private notes and lists.' },
      { icon: 'card', color: '#10b981', name: 'Cards', line: 'Bank and credit cards.' },
      { icon: 'id', color: '#0ea5e9', name: 'Identities', line: 'Aadhaar, PAN, passport and more.' },
      { icon: 'doc', color: '#64748b', name: 'Documents', line: 'PDFs and photos of your papers.' },
      { icon: 'folder', color: '#f59e0b', name: 'Folders', line: 'Group things, like Travel or Family.' },
    ] satisfies { icon: IconName; color: string; name: string; line: string }[],
    faqTitle: 'Questions',
    faqSub: 'The three things people ask most.',
    /** `big` questions get a large answer card ("Big three"); the rest open on tap. */
    faq: [
      {
        icon: 'shield',
        big: true,
        short: 'Yes',
        q: 'Is my data safe?',
        a: 'It is locked on your phone with AES-256 and opens with your PIN or fingerprint. Your backup is locked too. It opens only with your PIN, not with your Google account alone.',
      },
      {
        icon: 'phone',
        big: true,
        short: 'It comes back',
        q: 'What if I lose my phone?',
        a: 'Install MyStuff on your new phone and sign in with the same Google account. Enter your MyStuff PIN. Everything comes back.',
      },
      {
        icon: 'eyeOff',
        big: true,
        short: 'No',
        q: 'Can heyhapps see my data?',
        a: 'heyhapps has no servers. Your data is only on your phone and in your own Google Drive.',
      },
      {
        icon: 'lock',
        q: 'What if I forget my PIN?',
        a: "Tap \"Forgot PIN?\" and answer your recovery question. Then set a new PIN.",
      },
      {
        icon: 'user',
        q: 'Do I need a Google account?',
        a: 'No. MyStuff works offline. Google only adds backup, and you can turn it on later.',
      },
      {
        icon: 'trash',
        q: 'How do I delete everything?',
        a: 'Go to Settings → Sign out and turn on "Also delete my Google Drive backup".',
      },
    ] as { icon: IconName; big?: boolean; short?: string; q: string; a: string }[],
  },

  /** "Get it on your phone": drawn as the app's own Get started checklist. */
  install: {
    eyebrow: 'Free for Android',
    title: 'Get it on\nyour phone',
    sub: 'No ads, no account. About a minute.',
    meta: 'Version 1.0.1 beta · Android 7 or newer',
    card: { title: 'Get started', sub: 'MyStuff by heyhapps' },
    /** `done` shows the step ticked. */
    steps: [
      { title: 'Download MyStuff', line: 'From GitHub or itch.io', done: true },
      { title: 'Allow the install', line: 'Turn on "Allow from this source" once' },
      { title: 'Set your PIN', line: 'Open MyStuff and choose one' },
    ] as { title: string; line: string; done?: boolean }[],
  },

  /** The privacy policy (privacy.html). Checked against what the app does;
   *  change `updated` whenever the text changes. Emails, https:// links and
   *  [label](https://...) in the text become links. */
  privacy: {
    title: 'Privacy policy',
    intro: 'MyStuff has no servers and no accounts. Your data stays with you.',
    updated: '1 November 2026',
    sections: [
      { id: 'who', title: 'Who we are', blocks: [{ p: 'MyStuff is made by heyhapps. Questions: hello.heyhapps@gmail.com' }] },
      {
        id: 'phone',
        title: 'On your phone',
        blocks: [
          {
            list: [
              'Everything you save is encrypted with AES-256.',
              'Your PIN and recovery answer never leave your phone.',
              'Fingerprint unlock is done by Android. We never see it.',
              'MyStuff only sees the files you choose.',
              'A copied password stays in the clipboard until you copy something else.',
            ],
          },
        ],
      },
      {
        id: 'backup',
        title: 'Google backup',
        blocks: [
          { p: 'Backup is optional. If you turn it on:' },
          {
            list: [
              'MyStuff gets your name and email. It saves your email and Google account ID on your phone.',
              "It can only use a private MyStuff folder in your Drive. It can't see your other files.",
              'It checks how much space is free in your Drive. Nothing else.',
              'Your encrypted vault is saved in that folder. Its key is locked with your PIN, and a second copy with your recovery answer.',
              'Wrong PIN tries are counted there too, so reinstalling MyStuff does not reset them.',
              'Backups go straight to your Drive, never to heyhapps.',
            ],
          },
          {
            p: "Your backup opens only with your MyStuff PIN. Signing in to your Google account is not enough. Still, turn on 2-Step Verification. [Google's privacy policy](https://policies.google.com/privacy) also applies.",
          },
        ],
      },
      {
        id: 'google-data',
        title: 'Google data',
        blocks: [
          {
            quote:
              "MyStuff's use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.",
          },
          { p: 'We use it only for your backup. We never share it, use it for ads, or use it to train AI.' },
        ],
      },
      {
        id: 'scan',
        title: 'Scanning',
        blocks: [
          { p: "Scan uses Google's document scanner, part of Google Play services on your phone." },
          {
            list: [
              'Your pages are scanned on your phone. They are not sent to Google or to heyhapps.',
              'The first time, Google Play services may download the scanner.',
              'Google gets basic diagnostics about the scanner, like your phone model and how long a scan took. Not your pages. [Google ML Kit data](https://developers.google.com/ml-kit/android-data-disclosure)',
              "Don't want this? Use Choose file instead of Scan.",
            ],
          },
        ],
      },
      {
        id: 'online',
        title: 'When MyStuff goes online',
        blocks: [
          {
            p: "Only to sign in with Google, and to back up or restore. Scan can go online too, for Google's scanner. Links you tap open in your browser. Without Google, MyStuff works offline.",
          },
        ],
      },
      {
        id: 'never',
        title: 'We never',
        blocks: [
          {
            list: [
              'Run servers that get your data.',
              'Show ads, or add analytics, tracking or crash reports of our own.',
              'Sell or share your data.',
              'Ask you to make an account.',
            ],
          },
        ],
      },
      {
        id: 'permissions',
        title: 'Permissions',
        blocks: [
          {
            list: [
              'Internet: for Google Drive backup.',
              'Biometrics: for fingerprint unlock, and to show your recovery answer, if you turn it on.',
              "Network state: used by Google's scanner.",
              'No camera permission: the scanner uses Google Play services for the camera.',
            ],
          },
        ],
      },
      {
        id: 'pin',
        title: 'Forgot your PIN?',
        blocks: [
          {
            p: "Tap \"Forgot PIN?\" and answer your recovery question. Then set a new PIN.",
          },
        ],
      },
      {
        id: 'delete',
        title: 'Deleting your data',
        blocks: [
          { p: 'Your data stays until you delete it.' },
          {
            list: [
              'Settings → Sign out, and turn on "Also delete my Google Drive backup".',
              'Uninstalling MyStuff deletes everything on your phone.',
              'Remove Google access any time at https://myaccount.google.com/permissions',
            ],
          },
        ],
      },
      {
        id: 'website',
        title: 'This website',
        blocks: [
          {
            p: 'No cookies, no analytics. Your theme choice is saved in your browser only. The site is hosted on GitHub Pages, which may keep server logs.',
          },
        ],
      },
      { id: 'children', title: 'Children', blocks: [{ p: 'MyStuff is not for children under 13.' }] },
      { id: 'changes', title: 'Changes', blocks: [{ p: "If this policy changes, we'll update this page and the date." }] },
    ] as { id: string; title: string; blocks: ({ p: string } | { list: string[] } | { quote: string })[] }[],
  },
}
