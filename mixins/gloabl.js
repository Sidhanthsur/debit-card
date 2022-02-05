import Home from '~/assets/images/Home.svg'
import Card from '~/assets/images/Card.svg'
import Payments from '~/assets/images/Payments.svg'
import Credit from '~/assets/images/Credit.svg'
import Account from '~/assets/images/Account.svg'
import HomeGrey from '~/assets/images/HomeGrey.svg'
import PaymentsGrey from '~/assets/images/PaymentsGrey.svg'
import CreditGrey from '~/assets/images/CreditGrey.svg'
import AccountGrey from '~/assets/images/AccountGrey.svg'

export default {
  computed: {
    isMobile() {
      return window.innerWidth <= 600;
    },
    navOptions() {
      return [{
          label: 'Home',
          logo: Home,
          mobileLogo: HomeGrey
        },
        {
          label: 'Cards',
          logo: Card,
          mobileLogo: Card,
        },
        {
          label: 'Payments',
          logo: Payments,
          mobileLogo: PaymentsGrey
        },
        {
          label: 'Credit',
          logo: Credit,
          mobileLogo: CreditGrey
        },
        {
          label: 'Settings',
          logo: Account,
          mobileLogo: AccountGrey
        }
      ]
    }
  }
}