import { Home, Inbox, LucideProps } from "lucide-react";
import Dashboard from "@/components/views/Dashboard";
import Customers from "@/components/views/Customers";
import { JSX } from "react";
import { Q } from "node_modules/react-router/dist/development/route-data-Cq_b5feC.d.mts";


/**
 * Represents the type of page.
 * - 'list': The table page.
 * - 'detail': The detail page.
 * - 'none': A page that does not fall into the above categories.
 */
type PageType = 'list' | 'detail' | 'none';

/**
 * Represents a site map entry, defining the structure and metadata for a page in the application.
 */
export type SiteMap = {
  /**
   * The position in sidebar
   */
  index: number;

  /**
   * The title of the page, typically used for display purposes.
   */
  title: string;

  /**
   * The URL where the page can be accessed, typically used for navigation.
   */
  path: string;

  /**
   * The icon component associated with the page, showed in sidebar.
   */
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

  /**
   * A tooltip showed when hovering over the icon in shrink sidebar.
   */
  tooltip: string;

  /**
   * The React component of the page.
   */
  component: ( {data}: {data: string[]} ) => JSX.Element;

  /**
   * The type of the page, which determines its purpose and behavior [list, detail, none].
   */
  pageType: PageType;

};

export type QType1 = {
  'dashboard': {
    name: string
  },
  'customers': {
    cazzi: string,
  }
}

const siteMap: SiteMap[] = [
  {
    index: 0,
    title: 'dashboard',
    path: '/dashboard',
    icon: Home,
    tooltip: 'Home',
    component: Dashboard,
    pageType: 'list',
  },
  {
    index: 1,
    title: 'customer',
    path: '/customers',
    icon: Inbox,
    tooltip: 'Customers',
    component: Customers,
    pageType: 'list',
  },
  {
    index: 2,
    title: 'Ciccio',
    path: '/ciccio',
    icon: Inbox,
    tooltip: 'Customers',
    component: Customers,
    pageType: 'list',
  },
];

export default siteMap;