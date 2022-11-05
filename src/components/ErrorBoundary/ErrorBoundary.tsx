import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryStateProps = {
  hasError: boolean;
  error?: unknown;
};

export class ErrorBoundary extends React.Component {
  state: ErrorBoundaryStateProps = { hasError: false };

  constructor(props: ErrorBoundaryProps) {
    super(props as ErrorBoundaryProps);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
