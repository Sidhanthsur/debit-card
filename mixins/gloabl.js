import Home from '~/assets/images/Home.svg'
import Card from '~/assets/images/Card.svg'
import Payments from '~/assets/images/Payments.svg'
import Credit from '~/assets/images/Credit.svg'
import Account from '~/assets/images/Account.svg'

export default {
  computed: {
      isMobile () {
          return window.innerWidth <= 600;
      },
      navOptions () {
        return [
          {
            label: 'Home',
            logo: Home
          },
          {
            label: 'Cards',
            logo: Card
          },
          {
            label: 'Payments',
            logo: Payments
          },
          {
            label: 'Credit',
            logo: Credit
          },
          {
            label: 'Settings',
            logo: Account
          }
        ]
      }
  }
}