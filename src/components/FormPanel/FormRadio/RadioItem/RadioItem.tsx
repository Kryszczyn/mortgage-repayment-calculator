type RadioItemProps = {
    label: string;
    name: string;
    checked: boolean;
    onChange: () => void;
};

export default function RadioItem({ label, name, checked, onChange }: RadioItemProps) {
    return (
        <div
            className={` ${checked ? 'bg-custom_line bg-opacity-30 font-semibold border-custom_line' : ''} flex transition-colors items-center space-x-2 py-1 px-2 my-2 border border-gray-500 rounded-md cursor-pointer`}
            onClick={onChange}
        >
            <input className="accent-custom_line" type="radio" name={name} checked={checked} onChange={onChange} />
            <p>{label}</p>
        </div>
    );
}
