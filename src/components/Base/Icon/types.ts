import { Colors } from 'core/CssVariables';

export enum EIconNames {
  INTEGRATION = 'integration',
  FILE_DESCRIPTION = 'file-description',
  PHOTO = 'photo',
  COLLAPSE_MINUS = 'collapse-minus',
  COLLAPSE_PLUS = 'collapse-plus',
  DRAG_HANDLE = 'drag_handle',
  TIMER_ON = 'timer_on',
  TIMER_OFF = 'timer_off',
  STOP = 'stop',
  TIME_ENTRY = 'time_entries',
  EXPORT = 'export',
  CALENDAR = 'calendar',
  GPS = 'gps',
  CLOSE = 'close',
  LOGO = 'Logo',
  ISSUE_TYPE = 'issue-type',
  CONTACTS = 'contacts',
  ALL_TICKETS = 'all-tickets',
  MY_TICKETS = 'my-tickets',
  MANAGEMENT = 'management',
  MEMBER = 'member',
  ORGANIZATION = 'organization',
  GROUP_ADD = 'group-add',
  QUEUE = 'queue',
  ARROW_DROPDOWN = 'arrow-dropdown',
  ARROW_RIGHT = 'arrow-right',
  ARROW_LEFT = 'arrow-left',
  BLOCK = 'block',
  CHECK_ROUNDED = 'check-rounded',
  CLOCK = 'clock',
  CLOCK_FILLED = 'clock-filled',
  DASHBOARD = 'dashboard',
  DELETE = 'delete',
  DONE = 'done',
  DRAG = 'drag',
  EDIT = 'edit',
  EXPAND = 'expand',
  EYE_HIDE = 'eye-hide',
  EYE_SHOW = 'eye-show',
  ENTER = 'enter',
  GROUP = 'group',
  HIGHLIGHT_OFF = 'highlight-off',
  INFO = 'info',
  LAPTOP = 'laptop',
  MENU = 'menu',
  NOTIFICATION = 'notification',
  OPEN_WITH = 'open-with',
  PEOPLE = 'people',
  PERSON = 'person',
  PERSON_ADD = 'person-add',
  PERSON_REMOVE = 'person-remove',
  PHONE = 'phone',
  PLUS = 'plus',
  REPORT = 'report',
  SEARCH = 'search',
  SETTINGS = 'settings-filled',
  TASK = 'task',
  TICKET = 'ticket',
  UNREAD = 'unread',
  UPLOAD = 'upload',
  FILTER_TABLE = 'filter-table',
  MOON = 'moon',
  SUN = 'sun',
  QUICKFILTER = 'quick-filter',
  COLLAPSE = 'collapse',
  ASSIGNMENT = 'assignment',
  LEFT_ARROW = 'left-arrow',
  RIGHT_ARROW = 'right-arrow',
  BUSINESS_BAG = 'business_bag',
  PROFILE = 'profile',
  LOGOUT = 'logout',
  SCHEDULE = 'schedule',
  LOCATION = 'location',
  WEBSITE = 'website',
  EARTH = 'earth',
  SEGMENT = 'segment',
  DOWNLOAD = 'download',
  CONTACT_PHONE = 'contact_phone',
  OVERDUE_TICKET = 'overdue_ticket',
  OVERDUE_TASK = 'overdue_task',
  SLA = 'sla',
  URGENCY = 'urgency',
  MENU_DOT = 'menu_dot',
  OVERDUE = 'overdue',
  IMPORT = 'import-fill',
  CLOSE_ROUND = 'close-fill',
  COPY = 'copy',
  DUPLICATE = 'duplicate',
  EMPLOYEE = 'employee',
  CONTACTED = 'contacted',
  LEADERBOARD = 'leaderboard',
  REPLY = 'reply',
  SPECIAL_NOTES = 'specialNote',
  CUSTOMER_HEALTH = 'customer_health',
  TUNE = 'tune',
  PSL = 'PSL',
  GENERATE_INVOICE = 'generate-invoice',
  CREDIT_CARD = 'credit_card',
  INVOICE_TERM = 'invoice_term',
}

export type TIconProps = {
  isLoading?: boolean;
  color?: Colors;
  size?: number;
  icon: string;
  className?: string;
  onClick?: (e?: MouseEvent) => void;
  [x: string]: any;
  dataTestId?: string;
};
