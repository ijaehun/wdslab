export interface LayoutProps {
	children: React.ReactNode;
  }
  
  export interface SidebarProps {
	isOpen?: boolean;
	onClose?: () => void;
  }