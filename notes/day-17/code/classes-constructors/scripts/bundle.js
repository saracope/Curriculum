(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function User(u, p) {
	this.username = u;
	this.password = p;
	this.authenticate = function (passwordGuess) {
		if (passwordGuess === this.password) {
			console.log('The user is logged in');
		} else {
			console.log('incorrect password');
		}
	};
}

function Quarterback(name, team) {
	this.name = name;
	this.team = team;
	this.type = 'Quarterback';
	this.attempts = 0;
	this.completions = 0;
	var yards = 0;
	this.touchdowns = 0;
	this.interceptions = 0;
	this.sacks = 0;
	this.longestCompletion = 0;

	this.getYards = function () {
		return yards;
	};

	this.setYards = function (y) {
		yards = y;
	};

	this.completionPercentage = function () {
		return Math.round(this.completions / this.attempts * 100) + '%';
	};
	this.yardsPerAttempt = function () {
		return this.yards / this.attempts;
	};
	this.addAttempt = function (type, yards) {
		type = type.toLowerCase();
		if (type === 'touchdown') {
			this.touchdowns++;
			this.attempts++;
			this.completions++;
			this.yards += yards;
		} else if (type === 'interception') {
			this.interceptions++;
			this.attempts++;
		} else if (type === 'completion') {
			this.attempts++;
			this.completions++;
			this.yards += yards;
		} else if (type === 'sack') {
			this.sacks++;
			this.yards += yards;
		}
	};
}

var aaronRodgers = new Quarterback('Aaron Rodgers', 'Greenbay Packers');
var bigBen = new Quarterback('Ben Rothlesburger', 'Steelers');

// var aaronRodgers = {
// 	name: 'Aaron Rodgers',
// 	team: 'Greenbay Packers',
// 	attempts: 12,
// 	completions: 8,
// 	yards: 0,
// 	touchdowns: 0,
// 	interceptions: 0,
// 	sacks: 0,
// 	longestCompletion: 0,
// 	completionPercentage: function() {
// 		return Math.round(this.completions / this.attempts * 100)+'%';
// 	}
// };

// console.log(aaronRodgers.completionPercentage());

// var bigBen = {
// 	name: 'Ben Rothlesburger',
// 	team: 'Steelers',
// 	attempts: 12,
// 	completions: 2,
// 	yards: 0,
// 	touchdowns: 0,
// 	interceptions: 0,
// 	sacks: 0,
// 	longestCompletion: 0,
// 	completionPercentage: function() {
// 		return this.completions / this.attempts;
// 	}
// };

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map