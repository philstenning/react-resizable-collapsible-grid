import React from 'react'

type PlaceholderTextProp = {
  children?: React.ReactNode
  className?: string
}

export default function PlaceholderText({
  className,
  children,
}: PlaceholderTextProp) {
  return (
    <div className={`resizable-grid__content ${className || ''}`}>
      {!children && (
        <div className="sudo-text">
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--2" />

          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--3" />

          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--3" />

          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />

          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--3" />

          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />

          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--3" />

          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />

          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--3" />

          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />

          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--3" />

          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />

          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--3" />

          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />

          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--3" />

          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />

          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--3" />

          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />

          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--3" />

          <div className="sudo-text__box sudo-text__box--1" />
          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />

          <div className="sudo-text__box sudo-text__box--3" />
          <div className="sudo-text__box sudo-text__box--2" />
          <div className="sudo-text__box sudo-text__box--1" />
        </div>
      )}
      {children}
    </div>
  )
}
