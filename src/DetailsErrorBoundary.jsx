import Details from './details';
import ErrorBoundary from './ErrorBoundary';
const DetailsErrorBoundary = () => (
  <ErrorBoundary>
    <Details />
  </ErrorBoundary>
);
export default DetailsErrorBoundary;
