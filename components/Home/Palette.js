import Tooltip from "@mui/material/Tooltip";

const Palette = () => {
	const sq = {
		size: 6,
		classes:
			"h-10 w-10 rounded-md drop-shadow-md hover:drop-shadow-lg p-1 m-1",
	};

	return (
		<>
			<div className="flex flex-col items-center">
				<div className="font-black text-3xl">Colour Palette</div>

				<div className={`flex flex-row items-center justify-center`}>
					<Tooltip title="Black" arrow>
						<div className={`${sq.classes} bg-black`} />
					</Tooltip>
					<Tooltip title="Zeus" arrow>
						<div className={`${sq.classes} bg-zeus`} />
					</Tooltip>
					<Tooltip title="Davy" arrow>
						<div className={`${sq.classes} bg-davy`} />
					</Tooltip>
					<Tooltip title="Concord" arrow>
						<div className={`${sq.classes} bg-concord`} />
					</Tooltip>
					<Tooltip title="Grey" arrow>
						<div className={`${sq.classes} bg-grey`} />
					</Tooltip>
					<Tooltip title="Amour" arrow>
						<div className={`${sq.classes} bg-amour`} />
					</Tooltip>
					<Tooltip title="Bianca" arrow>
						<div className={`${sq.classes} bg-bianca`} />
					</Tooltip>
					<Tooltip title="White" arrow>
						<div className={`${sq.classes} bg-white`} />
					</Tooltip>
					<Tooltip title="Golden" arrow>
						<div className={`${sq.classes} bg-golden`} />
					</Tooltip>
					<Tooltip title="Pumpkin" arrow>
						<div className={`${sq.classes} bg-pumpkin`} />
					</Tooltip>
					<Tooltip title="Folly" arrow>
						<div className={`${sq.classes} bg-folly`} />
					</Tooltip>
					<Tooltip title="Ruddy" arrow>
						<div className={`${sq.classes} bg-ruddy`} />
					</Tooltip>
					<Tooltip title="Magenta" arrow>
						<div className={`${sq.classes} bg-magenta`} />
					</Tooltip>
					<Tooltip title="Violet" arrow>
						<div className={`${sq.classes} bg-violet`} />
					</Tooltip>
					<Tooltip title="Indigo" arrow>
						<div className={`${sq.classes} bg-indigo`} />
					</Tooltip>
					<Tooltip title="Ultramarine" arrow>
						<div className={`${sq.classes} bg-ultramarine`} />
					</Tooltip>
					<Tooltip title="Azure" arrow>
						<div className={`${sq.classes} bg-azure`} />
					</Tooltip>
					<Tooltip title="Aqua" arrow>
						<div className={`${sq.classes} bg-aqua`} />
					</Tooltip>
					<Tooltip title="Cyan" arrow>
						<div className={`${sq.classes} bg-cyan`} />
					</Tooltip>
				</div>
			</div>
		</>
	);
};

export default Palette;
