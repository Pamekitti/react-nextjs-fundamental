export default function Counter({ totalNumberOfItems, numberOfItemsPacked }) {
  return (
    <p>
      <b>
        {numberOfItemsPacked} / {totalNumberOfItems} items packed
      </b>
    </p>
  );
}
