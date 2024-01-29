interface BadgeProps {
    title: string;
}

const Badge = ({ title }: BadgeProps) => {
    return (
        <p className='text-zinc-300 bg-zinc-900 px-3 py-1 rounded hover:bg-zinc-700 transition-colors  inline-block'>
            {title}
        </p>
    );
};

export default Badge;
