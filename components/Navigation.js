import Link from 'next/link'
import React from 'react'

const Navigation = () => {
	return (
		<nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
			<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"/>
			</button>
			<Link prefetch href="/">
				<a className="navbar-brand"><img src="../static/spotnik.svg" height="30"/> spotnik</a>
			</Link>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link prefetch href="/">
							<a className="nav-link"><img src="../static/home.svg" height="14"/> home</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link prefetch href="/keypad">
							<a className="nav-link"><img src="../static/keypad.svg" height="14"/> keypad</a>
						</Link>
					</li>
					
					<li className="nav-item">
						<Link prefetch href="/configuration">
							<a className="nav-link"><img src="../static/configuration.svg" height="14"/> configuration</a>
						</Link>
					</li>

					<li className="nav-item">
						<Link prefetch href="/status">
							<a className="nav-link"><img src="../static/status.svg" height="14"/> status</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link prefetch href="/admin">
							<a className="nav-link"><img src="../static/admin.svg" height="14"/> admin</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link prefetch href="/about">
							<a className="nav-link"><img src="../static/about.svg" height="14"/> about</a>
						</Link>
					</li>
				</ul>
			</div>
			<style jsx>{`
			`}</style>
		</nav>
	)
}

export default Navigation
