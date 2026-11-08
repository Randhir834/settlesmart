import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Faq } from './content'

/**
 * Long-form guides for people who share a home. They answer the questions flatmates actually search for
 * (how to split rent, what to do when someone moves out, how to split electricity), so they are the
 * site's main way to be found for non-brand searches.
 *
 * Every worked example adds up exactly; check the maths if you change a number.
 * Titles, descriptions and publish dates live in src/data/pages.json under /guides/<slug>.
 */

export interface Guide {
  slug: string
  /** Keyword phrase shown above the headline, inside the h1. */
  eyebrow: string
  headline: string
  intro: string
  minutes: number
  takeaways: string[]
  body: ReactNode
  faqs: Faq[]
}

/* Building blocks so every guide is formatted the same way. */
const H2 = ({ id, children }: { id: string; children: ReactNode }) => (
  <h2 id={id} className="mt-12 scroll-mt-24 text-2xl font-bold text-ink sm:text-3xl">
    {children}
  </h2>
)
const H3 = ({ children }: { children: ReactNode }) => <h3 className="mt-8 text-xl font-bold text-ink">{children}</h3>
const Example = ({ title, children }: { title: string; children: ReactNode }) => (
  <aside className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-5 sm:p-6">
    <p className="text-sm font-semibold text-brand-700">{title}</p>
    <div className="[&_p]:mt-2 first:[&_p]:mt-3">{children}</div>
  </aside>
)
const Table = ({ caption, head, rows }: { caption: string; head: string[]; rows: (string | number)[][] }) => (
  <div className="mt-6 overflow-x-auto rounded-2xl border border-ink-100 bg-white">
    <table className="w-full min-w-[420px] text-left text-[15px]">
      <caption className="px-4 pt-4 text-left text-sm font-semibold text-ink">{caption}</caption>
      <thead>
        <tr className="border-b border-ink-100 text-sm text-ink-500">
          {head.map((h) => (
            <th key={h} scope="col" className="px-4 py-3 font-semibold">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-ink-100">
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((c, j) =>
              j === 0 ? (
                <th key={j} scope="row" className="px-4 py-3 font-medium text-ink">
                  {c}
                </th>
              ) : (
                <td key={j} className="amount px-4 py-3 text-ink-700">
                  {c}
                </td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
const A = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800">
    {children}
  </Link>
)

export const guides: Guide[] = [
  {
    slug: 'split-rent-with-flatmates',
    eyebrow: 'How to split rent with flatmates',
    headline: 'Four fair ways to split rent in a shared flat',
    intro:
      'Splitting rent equally is simple, but it isn’t always fair when one room is bigger or has an attached bathroom. Here are four methods flatmates in India use, with worked examples, so your flat can pick one and stick to it.',
    minutes: 7,
    takeaways: [
      'Equal split works when rooms are similar in size and features.',
      'Splitting by room area is fairest when rooms differ a lot in size.',
      'A fixed premium for an attached bathroom or balcony is easy to agree on.',
      'A hybrid (shared space split equally, private space by area) balances both.',
      'Agree on the method in writing before anyone moves in.',
    ],
    body: (
      <>
        <H2 id="before-you-start">Agree on three things before you split</H2>
        <p>Most rent arguments between flatmates aren’t about maths. They come from things nobody agreed on at the start. Settle these first:</p>
        <ul>
          <li><strong>Who pays the landlord.</strong> Usually one person pays the full rent and the others send their share by UPI. Decide who that is and by which date everyone pays them.</li>
          <li><strong>The split method.</strong> Pick one of the methods below and write it down, with each person’s amount.</li>
          <li><strong>The security deposit.</strong> Record how much each person contributed, so everyone gets the right amount back when they leave.</li>
        </ul>

        <H2 id="equal-split">Method 1: split the rent equally</H2>
        <p>
          Divide the total rent by the number of people. With ₹30,000 rent and three flatmates, everyone pays ₹10,000. It’s the
          default for a reason: there’s nothing to argue about, and it works well when rooms are roughly the same.
        </p>
        <p>It stops feeling fair when one room is noticeably bigger, has an attached bathroom or a balcony, or when a couple shares a room.</p>

        <H2 id="by-room-size">Method 2: split rent by room size</H2>
        <p>
          Measure each bedroom, add the areas together and give each person a share in proportion to their room. Shared spaces
          like the hall and kitchen are paid for in the same proportion.
        </p>
        <Example title="Worked example: ₹45,000 rent, three rooms">
          <p>The rooms measure 160, 120 and 120 sq ft, a total of 400 sq ft. The big room is 40% of the private space and each smaller room is 30%.</p>
        </Example>
        <Table
          caption="Rent split by room area"
          head={['Room', 'Area', 'Share', 'Monthly rent']}
          rows={[
            ['Room A', '160 sq ft', '40%', '₹18,000'],
            ['Room B', '120 sq ft', '30%', '₹13,500'],
            ['Room C', '120 sq ft', '30%', '₹13,500'],
            ['Total', '400 sq ft', '100%', '₹45,000'],
          ]}
        />

        <H2 id="by-room-features">Method 3: equal split plus a premium for better rooms</H2>
        <p>
          Start from an equal split, then agree on a fixed monthly premium for a room with extras, such as an attached
          bathroom, a balcony or air conditioning. The premium is taken off everyone else’s share, so the total stays the same.
        </p>
        <Example title="Worked example: ₹30,000 rent, two flatmates">
          <p>An equal split is ₹15,000 each. The room with the attached bathroom carries a ₹1,000 premium, so that flatmate pays ₹16,000 and the other pays ₹14,000.</p>
        </Example>

        <H2 id="hybrid">Method 4: the hybrid method</H2>
        <p>
          Everyone uses the hall, kitchen and balcony equally, but bedrooms differ. The hybrid method reflects that: agree what
          part of the rent pays for shared space, split that part equally, and split the rest by bedroom area.
        </p>
        <Example title="Worked example: ₹45,000 rent, half for shared space">
          <p>Shared half: ₹22,500 ÷ 3 = ₹7,500 each. Private half: ₹22,500 split 40% / 30% / 30% by room area.</p>
        </Example>
        <Table
          caption="Hybrid rent split"
          head={['Room', 'Shared space', 'Private space', 'Monthly rent']}
          rows={[
            ['Room A (160 sq ft)', '₹7,500', '₹9,000', '₹16,500'],
            ['Room B (120 sq ft)', '₹7,500', '₹6,750', '₹14,250'],
            ['Room C (120 sq ft)', '₹7,500', '₹6,750', '₹14,250'],
            ['Total', '₹22,500', '₹22,500', '₹45,000'],
          ]}
        />

        <H2 id="couples">What if a couple shares a room?</H2>
        <p>
          Two people use more shared space, water and electricity than one. Many flats split rent per room and utilities per
          person, so a couple pays one room’s rent but two shares of the bills. Whatever you choose, agree on it before they move in.
        </p>

        <H2 id="rent-receipts">Rent receipts and records</H2>
        <p>
          If you claim house rent allowance (HRA) from your employer, you will usually need rent receipts for the rent you
          actually pay. Ask your landlord for receipts that show each flatmate’s share, and keep your UPI payment history.
          Requirements can change, so check the current rules with your employer or a tax adviser.
        </p>

        <H2 id="keep-track">Keep track every month</H2>
        <p>
          Once you’ve picked a method, the hard part is keeping up with it month after month, alongside electricity, Wi-Fi
          and groceries. <A to="/flatmates">Settsmartly for flatmates</A> keeps each person’s share, who paid the landlord and
          what’s still pending in one shared record, with <A to="/features#splitting">equal, percentage, exact-amount and shares-based splits</A>.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'What is the fairest way to split rent with flatmates?',
        a: 'If rooms are similar, an equal split is fairest and simplest. If rooms differ in size or features, split by room area, add a fixed premium for the better room, or use a hybrid where shared space is split equally and bedrooms by area.',
      },
      {
        q: 'How do you split rent by room size?',
        a: 'Add up the area of all bedrooms, work out each room’s percentage of the total, and multiply the rent by that percentage. For ₹45,000 rent and rooms of 160, 120 and 120 sq ft, the shares are ₹18,000, ₹13,500 and ₹13,500.',
      },
      {
        q: 'Should the person with the attached bathroom pay more rent?',
        a: 'Usually, yes. A common approach is to agree a fixed monthly premium, for example ₹1,000, which that person pays on top of an equal share while the others pay the same amount less between them.',
      },
      {
        q: 'Who should pay the landlord in a shared flat?',
        a: 'Usually one person pays the full rent and the others transfer their share to them by an agreed date. Keep a record of every transfer so nobody has to rely on memory or chat history.',
      },
    ],
  },
  {
    slug: 'flatmate-moving-out',
    eyebrow: 'When a flatmate moves out',
    headline: 'How to settle up when a flatmate moves out mid-month',
    intro:
      'A flatmate leaving in the middle of the month raises awkward questions: do they pay the full month’s rent, what about the electricity bill, the fridge you bought together and their share of the deposit? Here is a step-by-step way to settle everything fairly.',
    minutes: 6,
    takeaways: [
      'Agree a notice period and a rent policy (full month or daily pro-rata) in advance.',
      'Pro-rata rent: monthly share × days stayed ÷ days in the month.',
      'Split utilities by person-days so nobody pays for days they weren’t there.',
      'Decide what happens to shared furniture and appliances before the last day.',
      'Settle every pending balance, then stop including them in new expenses.',
    ],
    body: (
      <>
        <H2 id="notice">Start with the notice period</H2>
        <p>
          Most flats expect around a month’s notice, which gives everyone time to find a replacement. If your rental agreement
          has a lock-in period or notice clause, the leaving flatmate’s obligations to the landlord come from that agreement,
          so read it first.
        </p>

        <H2 id="rent">Rent: full month or pro-rata?</H2>
        <p>There are two common policies. Neither is wrong; what matters is agreeing on one before anyone leaves.</p>
        <H3>Full-month policy</H3>
        <p>The leaving flatmate pays their full share for the month they leave in. It’s simple, and it’s fair when the remaining flatmates have to cover the gap until a replacement moves in.</p>
        <H3>Daily pro-rata policy</H3>
        <p>They pay only for the days they lived there: monthly share × days stayed ÷ days in the month.</p>
        <Example title="Worked example: pro-rata rent">
          <p>Their share is ₹12,000 a month. They leave after 12 days of a 30-day month: ₹12,000 × 12 ÷ 30 = ₹4,800.</p>
          <p>In a 31-day month the same stay costs ₹12,000 × 12 ÷ 31 = ₹4,645.16, so say upfront whether you count calendar days or a fixed 30.</p>
        </Example>

        <H2 id="utilities">Utilities: split by person-days</H2>
        <p>
          Electricity, water and gas bills usually arrive after someone has left. Splitting them by person-days means everyone
          pays for the days they were actually living there.
        </p>
        <Example title="Worked example: ₹3,100 electricity bill, 31-day cycle">
          <p>Four flatmates; one moved out after 10 days. Person-days: 3 × 31 + 10 = 103. Cost per person-day: ₹3,100 ÷ 103.</p>
        </Example>
        <Table
          caption="Electricity split by person-days"
          head={['Flatmate', 'Days', 'Share']}
          rows={[
            ['Leaving flatmate', 10, '₹300.97'],
            ['Flatmate 2', 31, '₹933.01'],
            ['Flatmate 3', 31, '₹933.01'],
            ['Flatmate 4', 31, '₹933.01'],
            ['Total', 103, '₹3,100.00'],
          ]}
        />
        <p>Fixed monthly costs such as Wi-Fi or a cook’s salary can follow the same rule, or follow your rent policy. Our guide to <A to="/guides/split-electricity-bill">splitting electricity and utility bills</A> covers more methods.</p>

        <H2 id="shared-items">Shared furniture and appliances</H2>
        <p>Things you bought together, such as a fridge, washing machine or sofa, need a decision. The usual options:</p>
        <ul>
          <li><strong>Buy-out:</strong> the remaining flatmates (or the replacement) pay the leaver their share of an agreed current value.</li>
          <li><strong>Take it along:</strong> the leaver keeps the item and pays the others their shares.</li>
          <li><strong>Leave it:</strong> the leaver gives up their share, usually for small or old items.</li>
        </ul>
        <Example title="Worked example: buying out a share of a fridge">
          <p>Four flatmates bought a ₹20,000 fridge two years ago. They agree it is now worth half, ₹10,000. The leaver’s quarter share is ₹2,500, paid by the remaining flatmates or by the person replacing them.</p>
        </Example>

        <H2 id="deposit">The security deposit</H2>
        <p>
          Landlords usually return the deposit only when the whole flat moves out. So when one person leaves, the replacement
          often pays the leaver their deposit share directly and takes over their place on the agreement. If there is no
          replacement, agree how and when the leaver will be repaid, and record it.
        </p>

        <H2 id="checklist">Move-out checklist</H2>
        <ul>
          <li>Confirm the move-out date and the rent policy you agreed.</li>
          <li>Work out their share of rent, utilities and any bills still to arrive.</li>
          <li>Settle every pending balance, in both directions.</li>
          <li>Agree what happens to shared items and the security deposit.</li>
          <li>Hand over keys and access cards, and update the rental agreement if needed.</li>
          <li>Stop including them in new expenses from the day after they leave.</li>
          <li>Add the replacement from their move-in date.</li>
        </ul>

        <H2 id="settsmartly">Let the app do the arithmetic</H2>
        <p>
          Settsmartly’s <A to="/features#roommates">roommate move-in and move-out tools</A> (planned) are designed to record
          move-out dates, apply your flat’s policy, settle what’s pending and keep past records intact. See how it fits a
          shared flat on our <A to="/flatmates">page for flatmates</A>.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Does a flatmate pay rent for the month they move out?',
        a: 'It depends on what your flat agreed. Under a full-month policy they pay their whole share for that month. Under a daily pro-rata policy they pay their share multiplied by the days they stayed, divided by the days in the month.',
      },
      {
        q: 'How do you calculate pro-rata rent when a flatmate leaves?',
        a: 'Multiply their monthly share by the number of days they stayed and divide by the number of days in the month. A ₹12,000 share for 12 days of a 30-day month is ₹4,800.',
      },
      {
        q: 'How do you split the electricity bill after a flatmate moves out?',
        a: 'Split it by person-days. Add up the days each person lived in the flat during the billing cycle, divide the bill by that total, and multiply by each person’s days.',
      },
      {
        q: 'Who returns the security deposit when one flatmate leaves?',
        a: 'Landlords usually return the deposit when the whole flat moves out, so the incoming flatmate often pays the leaver their share directly. Otherwise the flat agrees when and how the leaver is repaid.',
      },
    ],
  },
  {
    slug: 'split-electricity-bill',
    eyebrow: 'How to split electricity bills',
    headline: 'How to split electricity and utility bills with flatmates',
    intro:
      'Electricity is the bill flatmates argue about most, because usage isn’t equal: one room runs an AC all summer, someone is away for two weeks. Here are three ways to split electricity fairly, plus how to handle Wi-Fi, water, gas and household help.',
    minutes: 6,
    takeaways: [
      'Split equally by default; it’s simplest when usage is similar.',
      'Use person-days when someone is away for a long stretch.',
      'Use room sub-meters when AC or heater use differs a lot.',
      'Split fixed costs like Wi-Fi equally, and costs like a cook by who uses them.',
      'Agree who pays each bill and remind everyone before the due date.',
    ],
    body: (
      <>
        <H2 id="equal">Method 1: split equally</H2>
        <p>
          Divide the bill by the number of flatmates. For most flats, most months, this is the right answer: usage evens out
          over time and nobody has to keep score.
        </p>

        <H2 id="person-days">Method 2: split by days at home (person-days)</H2>
        <p>
          When someone is away for a long trip, or moves in or out during the billing cycle, split by person-days: the number of
          days each person was living in the flat.
        </p>
        <Example title="Worked example: ₹2,200 bill, 30-day cycle">
          <p>Four flatmates; one was away for 10 days. Person-days: 3 × 30 + 20 = 110. Cost per person-day: ₹2,200 ÷ 110 = ₹20.</p>
        </Example>
        <Table
          caption="Electricity split by days at home"
          head={['Flatmate', 'Days at home', 'Share']}
          rows={[
            ['Flatmate 1', 30, '₹600'],
            ['Flatmate 2', 30, '₹600'],
            ['Flatmate 3', 30, '₹600'],
            ['Flatmate away', 20, '₹400'],
            ['Total', 110, '₹2,200'],
          ]}
        />

        <H2 id="sub-meter">Method 3: split AC use with sub-meters</H2>
        <p>
          Air conditioners use far more power than anything else in a typical flat. If only some rooms have an AC, or some
          people use theirs much more, a sub-meter for each AC (an inexpensive energy meter an electrician can fit) shows
          exactly how many units each room used.
        </p>
        <p>
          Work out the average cost per unit from the main bill, charge each room for its AC units, and split what’s left
          equally.
        </p>
        <Example title="Worked example: ₹3,000 bill for 400 units">
          <p>Average cost: ₹3,000 ÷ 400 = ₹7.50 per unit. Room A’s AC used 150 units (₹1,125) and Room B’s used 50 units (₹375). The remaining 200 units (₹1,500) are split four ways: ₹375 each.</p>
        </Example>
        <Table
          caption="Electricity split with AC sub-meters"
          head={['Flatmate', 'AC units', 'AC cost', 'Common share', 'Total']}
          rows={[
            ['Room A', 150, '₹1,125', '₹375', '₹1,500'],
            ['Room B', 50, '₹375', '₹375', '₹750'],
            ['Room C', 0, '₹0', '₹375', '₹375'],
            ['Room D', 0, '₹0', '₹375', '₹375'],
            ['Total', 200, '₹1,500', '₹1,500', '₹3,000'],
          ]}
        />
        <p>
          Electricity tariffs in India are usually charged in slabs, with higher rates for higher usage, so an average rate is an
          approximation. It’s close enough for most flats, and far fairer than an equal split when one room runs an AC all day.
        </p>

        <H2 id="other-utilities">Wi-Fi, water, gas and household help</H2>
        <ul>
          <li><strong>Wi-Fi and OTT subscriptions:</strong> split equally among the people who use them.</li>
          <li><strong>Water and maintenance:</strong> usually split equally, or added to rent.</li>
          <li><strong>Gas cylinder:</strong> split among the people who cook, or equally if everyone does.</li>
          <li><strong>Cook:</strong> split among the people who eat the meals, adjusted for days away if you agree to.</li>
          <li><strong>Cleaning help:</strong> split equally, since everyone benefits from clean shared spaces.</li>
        </ul>

        <H2 id="paying">Who pays, and when</H2>
        <p>
          Give each bill an owner who pays it on time, and have everyone settle their share with that person. Most utility bills
          have a due date and a late fee, so a reminder a couple of days before matters more than the split method.
        </p>
        <p>
          Settsmartly’s <A to="/features#recurring">recurring bills and bill calendar</A> (planned) are built for exactly this,
          and you can already split any bill <A to="/features#splitting">equally, by percentage, by exact amount or by shares</A>.
          If someone is moving out, see <A to="/guides/flatmate-moving-out">how to settle up when a flatmate moves out</A>.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'How should flatmates split the electricity bill?',
        a: 'Split it equally by default. If someone was away for a long time, split it by the days each person was at home. If AC use differs a lot between rooms, fit sub-meters, charge each room for its AC units and split the rest equally.',
      },
      {
        q: 'How do you split electricity when one flatmate uses the AC more?',
        a: 'Fit a sub-meter to each AC. Divide the bill by the total units to get the average cost per unit, charge each room for its AC units at that rate, and split the remaining cost equally.',
      },
      {
        q: 'Should a flatmate who was away pay the electricity bill?',
        a: 'For a few days, most flats still split equally. For longer absences, splitting by person-days is fairer: each person pays for the days they were living in the flat.',
      },
      {
        q: 'How do you split Wi-Fi and subscriptions between flatmates?',
        a: 'Split them equally among the people who use them. Fixed costs like Wi-Fi don’t change with usage, so an equal split is the simplest and fairest approach.',
      },
    ],
  },
]

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug)
