/**
 * Represents the details of a person.
 */
export type Details = {
  /**
   * The name of the person.
   */
  name: string;

  /**
   * A brief description of what the person does and their experience.
   */
  description: string;
};

/**
 * Props for the `List` container.
 */
export type ListProps = {
  /**
   * Function to set the details of the selected card.
   * @param value - The new details to set.
   */
  setDetails: React.Dispatch<React.SetStateAction<Details>>;

  /**
   * Array of card details to be displayed in the list.
   */
  cards: Details[];
};

/**
 * Props for the `Detail` container.
 *
 * @property {Details} details - An object containing the details to be displayed in the `Detail` component.
 * It should include properties such as the customer's name and description.
 */
export type DetailProps = {
  details: Details;
};
