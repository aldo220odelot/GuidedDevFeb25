create or alter view AldoVwContactAgeDays
as
select Id as AldoId, Name as AldoName, BirthDate as AldoBirthdate,
dateDiff(day, BirthDate, getdate()) as AldoAgeDays
from Contact