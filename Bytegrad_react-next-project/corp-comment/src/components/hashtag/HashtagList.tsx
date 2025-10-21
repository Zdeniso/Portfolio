import HashtagItem from "./HashtagItem";

type HashtagListProps = {
  companyList: string[],
  onSelectCompany: (company: string) => void,
};

export default function HashtagList({ companyList, onSelectCompany }: HashtagListProps) {
  return (
    <ul className="hashtags">
        {companyList.map(company => (
          <HashtagItem 
            key={company} 
            company={company}
            onSelectCompany={onSelectCompany}/>
        ))}
    </ul>
  )
}
