export interface DropDownSelectorProps {
  /**
   * The id in the items array that represents the selected choice
   */
  choice: boolean | string;

  /**
   * The text to show as the dropdown label
   */
  text: string;

  /**
   * Triggered when the dropdown changes
   */
  onChange?: (id?: string) => void;

  /**
   * The list of items to show in the dropdown
   */
  items: { id: string; name: string }[];

  /**
   * Whether or not to display and let the user see the id in the label text
   */
  showId?: boolean;
}

export interface MultiSelectorProps {
  /**
   * The id in the items array that represents the selected choice
   */
  choice: boolean | string;

  /**
   * Triggered when the dropdown changes
   */
  onChange?: (newChoice: any) => void;

  /**
   * The list of items to show in the dropdown
   */
  items: { id: string; name: string }[];

  /**
   * The number of columns to show the selectors in
   */
  columns?: number;

  /**
   * Whether or not to show the action options section (set funnel step / product picture)
   */
  showOptions?: boolean;
}
