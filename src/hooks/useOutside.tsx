import { useEffect, useRef, useState } from 'react'

interface IOutsideProps {
	ref: any
	isShow: boolean
	setIsShow: any
}

export default function useOutside(initVisible: boolean): IOutsideProps {
	const [isShow, setIsShow] = useState(initVisible)
	const ref = useRef<HTMLElement>(null)

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => document.removeEventListener('click', handleClickOutside, true)
	})

	return { ref, isShow, setIsShow }
}
