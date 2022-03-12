import React from "react";

function Option({ setCity, setDate }) {
  return (
    <>
      <select
        required
        className="select"
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="108">서울</option>
        <option value="112">인천</option>
        <option value="119">수원</option>
        <option value="232">천안</option>
        <option value="131">청주</option>
        <option value="239">세종</option>
        <option value="133">대전</option>
        <option value="143">대구</option>
        <option value="152">울산</option>
        <option value="138">포항</option>
        <option value="159">부산</option>
        <option value="156">광주</option>
        <option value="184">제주</option>
      </select>
      {/* 달력 */}
      <input type="date" onChange={(e) => setDate((e.target.value).replace(/-/g, ""))}></input>
    </>
  );
}

export default Option;
