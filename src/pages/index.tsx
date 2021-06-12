import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle title={"Zuriweb"} subtitle={"Por uma web mais Zuri"} />

      <UserInformation
        picture={"https://github.com/pedro-rendeiro.png"}
        name={"Pedro Rendeiro"}
        rating={3}
        description={"Belém"}
      />

      <UserInformation
        picture={null}
        name={"Mariinha"}
        rating={5}
        description={"Maguari"}
      />
    </div>
  );
}
