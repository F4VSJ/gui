import React from 'react'
import Layout from '../components/Layout'
import fetch from '../lib/fetch'
import notie from '../lib/notie'

class Component extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentWillMount() {
		this.state = this.props
	}

	static getInitialProps() {
		return fetch('/api/configuration').then(res => res.json())
	}

	handleChange({target}) {
		this.setState(Object.assign({}, this.state, {[target.name]: target.value}))
	}

	handleSubmit(event) {
		event.preventDefault()
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')
		fetch('/api/configuration', {method: 'POST', headers, body: JSON.stringify(this.state)})
			.then(() => notie.success('Saved. Restarting SvxLink...'))
			.catch(() => {})
	}

	render() {
		const value = prop => this.state[prop]

		const ctcssFrequencies = [
			'67.0',
			'69.3',
			'71.9',
			'74.4',
			'77.0',
			'79.7',
			'82.5',
			'85.4',
			'88.5',
			'91.5',
			'94.8',
			'97.4',
			'100.0',
			'103.5',
			'107.2',
			'110.9',
			'114.8',
			'118.8',

			'123.0',
			'127.3',
			'131.8',
			'136.5',
			'141.3',
			'146.2',
			'150.0',
			'151.4',
			'156.7',
			'162.2',
			'167.9',
			'173.8',
			'179.9',
			'186.2',
			'192.8',
			'199.5',
			'206.5',
			'213.8',
			'221.3',

			'229.1',
			'237.1',
			'245.5',
			'254.1',
			'159.8',
			'165.5',
			'171.3',
			'177.3',
			'183.5',
			'189.9',
			'196.6',
			'203.5',
			'210.7',
			'218.1',
			'225.7',
			'233.6',
			'241.8',
			'250.3'
		]

		return (
			<Layout>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="callsign">Call sign</label>
						<input required placeholder="5P07N1K" type="text" className="form-control" name="callsign" value={value('callsign')} onChange={this.handleChange}/>
					</div>
					<div className="form-group">
						<label htmlFor="type">Node type</label>
						<select required name="type" className="form-control" value={value('type')} onChange={this.handleChange}>
							<option value="EL">Link</option>
							<option value="ER">Relay</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="default_lang">Language</label>
						<select required name="default_lang" className="form-control" value={value('default_lang')} onChange={this.handleChange}>
							<option value="en_US">English</option>
							<option value="fr_FR">French</option>
						</select>
					</div>
					<fieldset className="form-group">
						<legend>Squelch</legend>
						<div className="form-group">
							<label htmlFor="sql_det">Detection method</label>
							<select required name="sql_det" className="form-control" value={value('sql_det')} onChange={this.handleChange}>
								<option value="GPIO">GPIO</option>
								<option value="CTCSS">CTCSS</option>
								<option value="VOX">VOX</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="ctcss_fq">CTCSS frequency</label>
							<select required name="ctcss_fq" className="form-control" value={value('ctcss_fq')} onChange={this.handleChange}>
								{ctcssFrequencies.map(freq => <option key={freq} value={freq}>{freq}</option>)}
							</select>
						</div>
					</fieldset>
					<fieldset className="form-group">
						<legend>EchoLink</legend>
						<div className="form-group">
							<label htmlFor="echolink_password">proxy server</label>
							<input placeholder="example.com" type="text" className="form-control" name="echolink_proxy_server" value={value('echolink_proxy_server')} onChange={this.handleChange}/>
						</div>
						<div className="form-group">
							<label htmlFor="echolink_proxy_port">proxy port</label>
							<input placeholder="8100" type="number" className="form-control" name="echolink_proxy_port" value={value('echolink_proxy_port')} onChange={this.handleChange}/>
						</div>
						<div className="form-group">
							<label htmlFor="echolink_proxy_password">proxy password</label>
							<input placeholder="password" type="password" className="form-control" name="echolink_proxy_password" value={value('echolink_proxy_password')} onChange={this.handleChange}/>
						</div>
						<p>See <a href="http://www.echolink.org/proxylist.jsp">proxy list</a></p>
						<div className="form-group">
							<label htmlFor="echolink_password">password</label>
							<input placeholder="password" type="password" className="form-control" name="echolink_password" value={value('echolink_password')} onChange={this.handleChange}/>
						</div>
						<p>See <a href="http://www.echolink.org/validation/">validation</a></p>
					</fieldset>
					<fieldset className="form-group">
						<legend>Propagation alerts</legend>
						<div className="form-group">
							<label htmlFor="mail_server">Mail server</label>
							<input placeholder="imap.example.com" type="text" className="form-control" name="mail_server" value={value('mail_server')} onChange={this.handleChange}/>
						</div>
						<div className="form-group">
							<label htmlFor="mail_username">Mail address</label>
							<input placeholder="username@example.com" type="email" className="form-control" name="mail_username" value={value('mail_username')} onChange={this.handleChange}/>
						</div>
						<div className="form-group">
							<label htmlFor="mail_password">Mail password</label>
							<input placeholder="password" type="password" className="form-control" name="mail_password" value={value('mail_password')} onChange={this.handleChange}/>
						</div>
						<p>See <a href="https://f5nlg.wordpress.com/2017/05/29/doc-du-module-propagation-monitor/">documentation</a></p>
					</fieldset>
					<input type="submit" className="btn btn-primary" value="Save"/>
				</form>
			</Layout>
		)
	}
}

export default Component
