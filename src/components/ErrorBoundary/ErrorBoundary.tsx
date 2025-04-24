import { Component, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  errorComponent?: ReactNode;
}

interface State {
  hasError: boolean;
  noAccess: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      noAccess: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, noAccess: error.message.includes('Access denied') };
  }

  componentDidCatch(error: Error): void {
    console.error('ErrorBoundary: ', error);
  }

  render() {
    if(this.state.hasError) {
      return <h1>Что-то пошло не так!</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;