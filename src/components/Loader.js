import spinner from './spinner.gif'

export default function Loader() {
  return (
    <div className="loader">
        <img src={spinner} alt="Loading" />
        <h1>Fetching Data</h1>
    </div>
)
}
