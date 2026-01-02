import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2833] to-[#0B0C10] flex items-center justify-center p-4">
          <div className="bg-[#1F2833]/50 backdrop-blur-xl rounded-2xl border border-[#45A29E]/30 p-8 max-w-md text-center">
            <div className="mb-4">
              <svg
                className="w-16 h-16 mx-auto text-[#66FCF1]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#66FCF1] mb-2">Something went wrong</h2>
            <p className="text-[#C5C6C7] mb-6">
              We encountered an error while loading the dashboard.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#66FCF1] text-[#0B0C10] px-6 py-2 rounded-lg font-medium hover:bg-[#45A29E] transition-colors duration-300"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
