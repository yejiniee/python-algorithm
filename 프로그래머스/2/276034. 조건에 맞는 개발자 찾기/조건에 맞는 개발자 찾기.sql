-- SQL에서 비트 연산자는 숫자를 2진수로 자동 변환하여 연산.
-- => 숫자를 직접 2진수로 변환할 필요 없이 비트 연산을 사용
SELECT D.ID, D.EMAIL, D.FIRST_NAME, D.LAST_NAME
FROM DEVELOPERS D
-- SKILL_CODE의 비트 중에서 256 (Python에 해당하는 코드)을 포함하는지 확인
-- SKILL_CODE의 비트 중에서 1024 (C#에 해당하는 코드)을 포함하는지 확인
WHERE (D.SKILL_CODE & 256 > 0) OR (D.SKILL_CODE & 1024 > 0)
ORDER BY ID ASC; 
