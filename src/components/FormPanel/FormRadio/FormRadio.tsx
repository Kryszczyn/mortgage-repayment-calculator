import RadioItem from "./RadioItem/RadioItem";

type FormRadioProps = {
    selected: number;
    onChange: (value: number) => void;
};

export default function FormRadio({ selected, onChange }: FormRadioProps) {
    return (
        <div className="w-100">
            <div>
                <span>Mortgage Type</span>
            </div>
            <div className="py-1">
                <RadioItem
                    name="mortgageType"
                    label="Repayment"
                    checked={selected === 1}
                    onChange={() => onChange(1)}
                />
                <RadioItem
                    name="mortgageType"
                    label="Interest Only"
                    checked={selected === 2}
                    onChange={() => onChange(2)}
                />
            </div>
        </div>
    );
}
