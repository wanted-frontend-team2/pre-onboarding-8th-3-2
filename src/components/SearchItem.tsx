import type { SickType } from "src/types/sick.type";
import * as UI from "src/components/ui";

interface Props {
  searchValue: string;
  sick: SickType;
}

export function SearchItem({ searchValue, sick }: Props) {
  const { sickNm } = sick;

  // Fixme: dangerouslySetInnerHTMl을 사용하지 않고 구현하기
  const boldSickName = sickNm
    .toUpperCase()
    .replaceAll(
      searchValue.toUpperCase(),
      `<b>${searchValue.toUpperCase()}</b>`
    );

  return (
    <UI.Item>
      <span dangerouslySetInnerHTML={{ __html: boldSickName }} />
    </UI.Item>
  );
}
