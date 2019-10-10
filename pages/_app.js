import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from "context-q";

export default class MyApp extends App {
	render() {
		const { Component } = this.props;
		return (
			<Provider defaultState={{ count: 0 }}>
				<Component/>
			</Provider>
		)
	}
}
