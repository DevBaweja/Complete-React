import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';
class ErrorBoundary extends React.Component {
    state = {
        err: false,
    };
    static getDerivedStateFromError(err) {
        return { err: true };
    }
    componentDidCatch(err, info) {
        console.log({ err, info });
    }

    render() {
        const { err } = this.state;
        const { children } = this.props;
        if (err)
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
                    <ErrorImageText>Sorry! This page is broken.</ErrorImageText>
                </ErrorImageOverlay>
            );
        return children;
    }
}

export default ErrorBoundary;
