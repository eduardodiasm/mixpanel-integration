import Mixpanel from 'mixpanel'

const mixpanelToken = process.env.MIXPANEL_TOKEN || ''
const mixpanel = Mixpanel.init(mixpanelToken)

export default mixpanel
