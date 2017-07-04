from checkio.signals import ON_CONNECT
from checkio import api
from checkio.referees.io import CheckiOReferee

from tests import TESTS

api.add_listener(
    ON_CONNECT,
    CheckiOReferee(tests=TESTS,
        function_name={
            "python": "checkio",
            "js": "romanNumerals"
        }).on_ready)
