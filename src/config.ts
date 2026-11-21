/**
 * Everything the site says and links to, in one place; the policy pages are in policies.ts.
 * Edit these files to change the site; the components only render them.
 */
import type { IconName } from './components/Icon'

export const site = {
  appName: 'MyStuff',
  brand: 'heyhapps',
  email: 'hello.heyhapps@gmail.com',

  links: {
    /** The arm64 APK, for most phones. Change the version on each release. */
    download: 'https://github.com/heyhapps/mystuff-web/releases/download/v1.0.0/MyStuff-1.0.0-arm64.apk',
    /** The newest release with every APK, for older phones. */
    releases: 'https://github.com/heyhapps/mystuff-web/releases/latest',
    itch: 'https://heyhapps.itch.io/mystuff',
    github: 'https://github.com/heyhapps/mystuff-web/releases',
  },

  hero: {
    headline: 'All your stuff\nSafe in your pocket',
    /** The one word in the headline drawn in the brand gradient. */
    highlight: 'pocket',
    /** Small badge above the headline, with a green dot. Empty string hides it. */
    badge: 'Now available',
    sub: 'A private vault for passwords, notes, cards, IDs and documents. Free, with no ads and no tracking.',
    primary: 'Download for Android',
    secondary: 'Get it on itch.io',
    /** Shorter labels for the side-by-side buttons on phones. */
    primaryShort: 'Download',
    secondaryShort: 'Get on itch.io',
    note: 'Free · optional Google Drive backup',
    notePhone: 'Free for Android 7 or newer',
    /** Small link to every APK on the releases page. */
    otherVersions: 'Other versions',
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
        none: 'Never sent to heyhapps.',
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
        a: 'Your data is only on your phone and in your own Google Drive. Our small payment server only knows your Google account ID and your Pro purchase. It never gets your vault.',
      },
      {
        icon: 'star',
        q: 'What does Pro add?',
        a: 'Free has 20 documents, 5 folders and files up to 5 MB. Pro has unlimited documents and folders, files up to 25 MB, and scan to PDF. Passwords, notes, cards and IDs are unlimited for everyone.',
      },
      {
        icon: 'card',
        q: 'How much is Pro?',
        a: '₹299 once, a special offer (usually ₹399). No subscription. Pay by UPI, card or net banking through Razorpay. Pro is tied to your Google account and comes back on a new phone.',
      },
      {
        icon: 'heart',
        q: 'Can I support MyStuff?',
        a: 'Yes. Go to Settings → Support MyStuff and donate any amount through Razorpay. Donating unlocks nothing.',
      },
      {
        icon: 'lock',
        q: 'What if I forget my PIN?',
        a: "Tap \"Forgot PIN?\" and answer your recovery question. Then set a new PIN.",
      },
      {
        icon: 'user',
        q: 'Do I need a Google account?',
        a: 'No. MyStuff works offline. Google is only needed for backup and Pro, and you can add it later.',
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
    meta: 'Version 1.0.0 · Android 7 or newer',
    card: { title: 'Get started', sub: 'MyStuff by heyhapps' },
    /** `done` shows the step ticked. */
    steps: [
      { title: 'Download MyStuff', line: 'From GitHub or itch.io', done: true },
      { title: 'Allow the install', line: 'Turn on "Allow from this source" once' },
      { title: 'Set your PIN', line: 'Open MyStuff and choose one' },
    ] as { title: string; line: string; done?: boolean }[],
  },
}
