type FormInputProps = {
    label: string;
    prefix?: boolean;
    prefixValue?: string;
    suffix?: boolean;
    suffixValue?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormInput({ label, prefix, prefixValue, suffix, suffixValue, value, onChange }: FormInputProps) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
            e.preventDefault();
        }
    };

    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold">{label}</label>
            <div className="flex items-center">
                {prefix && <span className="mr-2">{prefixValue}</span>}
                <input
                    type="text"
                    inputMode="numeric"
                    value={value}
                    onChange={(e) => {
                        if (/^\d*$/.test(e.target.value)) {
                            onChange(e);
                        }
                    }}
                    onKeyDown={handleKeyDown}
                    className="border border-gray-300 rounded-md p-2 flex-grow outline-none focus:border-custom_line"
                />
                {suffix && <span className="ml-2">{suffixValue}</span>}
            </div>
        </div>
    );
}
