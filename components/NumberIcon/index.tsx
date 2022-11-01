
const activeStyles = {
	display: 'flex',
	alignItems:'center',
	justifyContent:'center',
	borderRadius: '9999px',
	height: '35px',
	width: '35px',
	
	color: '#5167E1',
	backgroundColor: 'rgba(165,165,255,1)',
}

const inactiveStyles = {
	display: 'flex',
	alignItems:'center',
	justifyContent:'center',
	borderRadius: '9999px',
	height: '35px',
	width: '35px',

	color: 'black',
	backgroundColor: 'rgba(0,0,0,.15)',
}

const NumberIcon = ({
	isActive,
	num
}: {
	isActive: boolean,
	num: number
}) => {
	return (
		<div className="mb-2" style={isActive ? activeStyles : inactiveStyles}>
			{num}
		</div>
	)
}

export default NumberIcon;
