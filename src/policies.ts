/**
 * The text of the policy pages (privacy, terms, refund, delivery, contact).
 * Change `updated` whenever a page's text changes. Emails, https:// links,
 * [label](https://...) and [label](page.html) in the text become links.
 */

type Block = { p: string } | { list: string[] } | { quote: string }

export type PolicyDoc = {
  title: string
  intro: string
  updated: string
  sections: { id: string; title: string; blocks: Block[] }[]
}

const privacy: PolicyDoc = {
  title: 'Privacy policy',
  intro: 'No sign-up, no ads, no tracking. Your vault stays with you.',
  updated: '21 November 2026',
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
      id: 'background',
      title: 'Backup in the background',
      blocks: [
        {
          list: [
            'A backup upload or download keeps running when you close MyStuff.',
            'It only moves your encrypted backup to and from your own Drive.',
            'A notification shows while it runs. Tap Stop to end it.',
          ],
        },
      ],
    },
    {
      id: 'notifications',
      title: 'Notifications',
      blocks: [
        {
          list: [
            'MyStuff asks to show notifications.',
            'They only show upload and download progress, with a Stop button.',
            'No ads, no reminders, no marketing.',
          ],
        },
      ],
    },
    {
      id: 'sync',
      title: 'Two-phone sync',
      blocks: [
        {
          list: [
            'You can use MyStuff on two phones with the same Google account.',
            'They sync through your own Google Drive backup, never through heyhapps.',
            'What syncs stays encrypted and opens only with your PIN.',
          ],
        },
      ],
    },
    {
      id: 'wifi',
      title: 'Wi-Fi only',
      blocks: [
        {
          list: [
            'Turn on "Wi-Fi only" to upload backups only on Wi-Fi.',
            'For this, MyStuff checks whether you are on Wi-Fi. Nothing else.',
          ],
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
        { p: 'We use it only for your backup and sync. We never share it, use it for ads, or use it to train AI.' },
      ],
    },
    {
      id: 'payments',
      title: 'Payments',
      blocks: [
        {
          list: [
            'MyStuff Pro is paid through Razorpay. Razorpay handles your card, UPI or bank details. We never see them.',
            'Donations are paid through Razorpay too. Our server keeps no record of them.',
          ],
        },
        { p: 'What we keep: your Google account ID and the Razorpay order ID of your Pro purchase, so Pro comes back on a new phone. Nothing else.' },
        { p: 'See the [Terms](terms.html) and the [Refund policy](refund.html).' },
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
          p: "Only to sign in with Google, to back up, restore or sync, and to buy or restore Pro. Scan can go online too, for Google's scanner. Links you tap open in your browser. Without Google, MyStuff works offline.",
        },
      ],
    },
    {
      id: 'never',
      title: 'We never',
      blocks: [
        {
          list: [
            'Run servers that get your vault.',
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
            'Internet: for Google Drive backup, sync and payments.',
            'Biometrics: for fingerprint unlock, and to show your recovery answer, if you turn it on.',
            'Notifications: to show upload and download progress, with a Stop button.',
            'Foreground service: to keep a backup upload or download running when MyStuff is closed.',
            "Network state: for the Wi-Fi only option, and used by Google's scanner.",
            'No camera permission: the scanner uses Google Play services for the camera.',
          ],
        },
      ],
    },
    {
      id: 'pin',
      title: 'Forgot your PIN?',
      blocks: [{ p: 'Tap "Forgot PIN?" and answer your recovery question. Then set a new PIN.' }],
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
  ],
}

const terms: PolicyDoc = {
  title: 'Terms and conditions',
  intro: 'The rules for using MyStuff and buying MyStuff Pro.',
  updated: '21 November 2026',
  sections: [
    {
      id: 'about',
      title: 'About these terms',
      blocks: [
        { p: 'MyStuff is an Android app made by heyhapps, in India. Website: https://heyhapps.github.io/mystuff-web/' },
        { p: 'By using MyStuff or buying Pro, you agree to these terms.' },
      ],
    },
    {
      id: 'app',
      title: 'Using MyStuff',
      blocks: [
        {
          list: [
            'MyStuff is a vault for your documents. Everything is encrypted on your phone.',
            'Backup is optional. It goes to a hidden, encrypted folder in your own Google Drive.',
            "Keep your PIN and recovery answer safe. We can't see your data, so we can't unlock it for you.",
            'Use MyStuff only for lawful purposes.',
          ],
        },
      ],
    },
    {
      id: 'pro',
      title: 'MyStuff Pro',
      blocks: [
        {
          list: [
            'Pro costs ₹299. It is a one-time payment, not a subscription.',
            'Pro unlocks in the app straight away after payment.',
            'Pro is tied to your Google account. On a new phone, sign in with the same account and tap "Restore purchase".',
            'Nothing physical is shipped. See [Shipping and delivery](delivery.html).',
          ],
        },
      ],
    },
    {
      id: 'payments',
      title: 'Payments',
      blocks: [
        {
          list: [
            'Prices are in Indian rupees (INR).',
            'Payments are handled by Razorpay. We never see your card, UPI or bank details.',
            "Razorpay's own terms also apply to your payment.",
          ],
        },
      ],
    },
    {
      id: 'donations',
      title: 'Donations',
      blocks: [
        {
          list: [
            'Donations are voluntary. They are paid through Razorpay.',
            'Donating unlocks nothing.',
            'Donations are not refundable, except accidental duplicates.',
          ],
        },
      ],
    },
    {
      id: 'refunds',
      title: 'Refunds',
      blocks: [{ p: 'See the [Cancellation and refund policy](refund.html).' }],
    },
    {
      id: 'liability',
      title: 'Our liability',
      blocks: [
        {
          list: [
            'MyStuff is provided as is. We work to keep it safe and working, but we cannot promise it is free of bugs.',
            'As far as the law allows, heyhapps is not liable for lost data or indirect losses.',
            'Keep a backup of anything important.',
          ],
        },
      ],
    },
    { id: 'law', title: 'Governing law', blocks: [{ p: 'These terms are governed by the laws of India.' }] },
    { id: 'changes', title: 'Changes', blocks: [{ p: "If these terms change, we'll update this page and the date." }] },
    { id: 'contact', title: 'Contact', blocks: [{ p: 'Questions? See [Contact us](contact.html).' }] },
  ],
}

const refund: PolicyDoc = {
  title: 'Cancellation and refund policy',
  intro: 'MyStuff Pro is a one-time payment. This is when you can get your money back.',
  updated: '21 November 2026',
  sections: [
    {
      id: 'cancel',
      title: 'Cancellation',
      blocks: [
        {
          list: [
            'Pro is a one-time payment, not a subscription. There is nothing to cancel.',
            'Pro unlocks straight away, so a payment cannot be cancelled once it is made.',
          ],
        },
      ],
    },
    {
      id: 'refunds',
      title: 'Refunds',
      blocks: [
        { p: 'We do not give refunds for Pro, except when:' },
        {
          list: [
            'You were charged twice for the same purchase.',
            'The payment was taken, but Pro did not unlock.',
          ],
        },
      ],
    },
    {
      id: 'ask',
      title: 'How to ask',
      blocks: [
        { p: 'Email hello.heyhapps@gmail.com with:' },
        { list: ['Your payment ID.', 'What went wrong.'] },
      ],
    },
    {
      id: 'timing',
      title: 'When you get it',
      blocks: [
        {
          list: [
            'Refunds go back to your original payment method.',
            'This usually takes 5-7 working days after we confirm the refund.',
          ],
        },
      ],
    },
    {
      id: 'donations',
      title: 'Donations',
      blocks: [
        {
          p: 'Donations are not refundable, except accidental duplicates. For a duplicate, email us with the payment ID.',
        },
      ],
    },
    {
      id: 'more',
      title: 'More',
      blocks: [
        {
          list: [
            "Pro hasn't unlocked? See [Shipping and delivery](delivery.html).",
            'Other questions: [Contact us](contact.html).',
          ],
        },
      ],
    },
  ],
}

const delivery: PolicyDoc = {
  title: 'Shipping and delivery policy',
  intro: 'MyStuff Pro is digital. Nothing is shipped.',
  updated: '21 November 2026',
  sections: [
    {
      id: 'what',
      title: 'What you get',
      blocks: [
        {
          list: [
            'MyStuff Pro, a one-time upgrade in the MyStuff app.',
            'Nothing physical is shipped.',
            'There are no shipping charges.',
          ],
        },
      ],
    },
    {
      id: 'when',
      title: 'Delivery time',
      blocks: [{ p: 'Pro unlocks in the app straight away after payment.' }],
    },
    {
      id: 'new-phone',
      title: 'On a new phone',
      blocks: [{ p: 'Pro is tied to your Google account. Sign in with the same account and tap "Restore purchase".' }],
    },
    {
      id: 'problem',
      title: "If Pro hasn't unlocked",
      blocks: [
        { p: 'If Pro has not unlocked within 24 hours, email hello.heyhapps@gmail.com with your payment ID.' },
        { p: 'If you paid and Pro cannot be unlocked, we refund you. See the [Refund policy](refund.html).' },
      ],
    },
  ],
}

const contact: PolicyDoc = {
  title: 'Contact us',
  intro: 'Questions, problems or feedback? Email us.',
  updated: '21 November 2026',
  sections: [
    {
      id: 'email',
      title: 'Email',
      blocks: [{ p: 'hello.heyhapps@gmail.com' }, { p: 'We reply within 2 working days.' }],
    },
    {
      id: 'include',
      title: 'What to include',
      blocks: [
        {
          list: [
            'What happened, and what you expected.',
            'For payment issues: your payment ID.',
            'If something is not working: your phone model and Android version.',
          ],
        },
        { p: 'Never send your PIN or recovery answer. We will never ask for them.' },
      ],
    },
    {
      id: 'who',
      title: 'Who we are',
      blocks: [{ p: 'MyStuff is made by heyhapps, in India. Website: https://heyhapps.github.io/mystuff-web/' }],
    },
    {
      id: 'more',
      title: 'More',
      blocks: [
        {
          list: [
            '[Terms and conditions](terms.html)',
            '[Cancellation and refund policy](refund.html)',
            '[Shipping and delivery policy](delivery.html)',
            '[Privacy policy](privacy.html)',
          ],
        },
      ],
    },
  ],
}

export const policies = { privacy, terms, refund, delivery, contact }
